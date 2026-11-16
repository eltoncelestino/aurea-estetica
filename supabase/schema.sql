-- Execute no SQL Editor do Supabase
create extension if not exists "pgcrypto";
create extension if not exists btree_gist;

create table profissionais (id uuid primary key default gen_random_uuid(), nome text not null, especialidade text, ativo boolean default true, criado_em timestamptz default now());
create table servicos (id uuid primary key default gen_random_uuid(), nome text not null, descricao text, duracao_min int not null, preco_a_partir numeric(10,2), ativo boolean default true, criado_em timestamptz default now());
create table clientes (id uuid primary key default gen_random_uuid(), nome text not null, whatsapp text unique not null, email text, tags text[] default '{}', observacoes text, optout boolean default false, criado_em timestamptz default now());
create table leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null, whatsapp text not null, interesse text, melhor_horario text,
  origem text default 'site', utm jsonb default '{}',
  status text default 'novo' check (status in ('novo','contatado','agendado','atendido','recorrente')),
  consentimento_whatsapp boolean not null default false,
  criado_em timestamptz default now()
);
create table horarios_trabalho (id uuid primary key default gen_random_uuid(), profissional_id uuid references profissionais(id) on delete cascade, dia_semana int check (dia_semana between 0 and 6), inicio time not null, fim time not null);
create table agendamentos (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid references clientes(id), servico_id uuid references servicos(id), profissional_id uuid references profissionais(id),
  inicio timestamptz not null, fim timestamptz not null,
  status text default 'agendado' check (status in ('agendado','confirmado','cancelado','concluido','faltou')),
  criado_em timestamptz default now(),
  exclude using gist (profissional_id with =, tstzrange(inicio, fim) with &&) where (status <> 'cancelado')
);
create table mensagens_enviadas (id uuid primary key default gen_random_uuid(), telefone text not null, template text, conteudo text, status text, criado_em timestamptz default now());
create table avaliacoes (id uuid primary key default gen_random_uuid(), agendamento_id uuid references agendamentos(id), nota int check (nota between 1 and 5), comentario text, criado_em timestamptz default now());

create index on leads (status, criado_em desc);
create index on agendamentos (inicio);
create index on mensagens_enviadas (telefone);

-- RLS ativo: sem políticas públicas. O site grava pelo servidor com a service role.
alter table profissionais enable row level security;
alter table servicos enable row level security;
alter table clientes enable row level security;
alter table leads enable row level security;
alter table horarios_trabalho enable row level security;
alter table agendamentos enable row level security;
alter table mensagens_enviadas enable row level security;
alter table avaliacoes enable row level security;

insert into profissionais (nome, especialidade) values ('Dra. Helena Marques','Procedimentos faciais'),('Bianca Torres','Cílios e sobrancelhas'),('Rafaela Duarte','Corporal e laser');
insert into servicos (nome, duracao_min, preco_a_partir) values ('Limpeza de pele profunda',90,150),('Peeling de diamante',60,180),('Microagulhamento facial',75,320),('Design de sobrancelhas com henna',45,85),('Extensão de cílios fio a fio',120,190),('Drenagem linfática',60,140);
