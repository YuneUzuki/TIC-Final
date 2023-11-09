-- AlterTable
CREATE SEQUENCE movimentacao_financeira_id_seq;
ALTER TABLE "movimentacao_financeira" ALTER COLUMN "ID" SET DEFAULT nextval('movimentacao_financeira_id_seq');
ALTER SEQUENCE movimentacao_financeira_id_seq OWNED BY "movimentacao_financeira"."ID";

-- AlterTable
CREATE SEQUENCE plano_contas_id_seq;
ALTER TABLE "plano_contas" ALTER COLUMN "ID" SET DEFAULT nextval('plano_contas_id_seq');
ALTER SEQUENCE plano_contas_id_seq OWNED BY "plano_contas"."ID";
