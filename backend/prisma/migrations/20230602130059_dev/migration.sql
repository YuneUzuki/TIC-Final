-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_material" TEXT NOT NULL,
    "desc_prod" TEXT NOT NULL,
    "marca_prod" TEXT NOT NULL,
    "id_tipo" INTEGER NOT NULL,
    "sta_ativo" TEXT NOT NULL,
    "estoque_min" INTEGER NOT NULL,
    "estoque_max" INTEGER NOT NULL,
    "id_unme" INTEGER NOT NULL,
    "data_incl" TEXT NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("cod_material", "data_cad", "data_incl", "desc_prod", "estoque_max", "estoque_min", "id", "id_tipo", "id_unme", "marca_prod", "sta_ativo", "user_cad") SELECT "cod_material", "data_cad", "data_incl", "desc_prod", "estoque_max", "estoque_min", "id", "id_tipo", "id_unme", "marca_prod", "sta_ativo", "user_cad" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE TABLE "new_Tipo_Prod" (
    "id_tipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "segmento" TEXT NOT NULL,
    "sta_controla_val" TEXT NOT NULL,
    "sta_mov_estoque" TEXT NOT NULL,
    "ueps_peps" TEXT NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Tipo_Prod" ("data_cad", "id_tipo", "segmento", "sta_controla_val", "sta_mov_estoque", "ueps_peps", "user_cad") SELECT "data_cad", "id_tipo", "segmento", "sta_controla_val", "sta_mov_estoque", "ueps_peps", "user_cad" FROM "Tipo_Prod";
DROP TABLE "Tipo_Prod";
ALTER TABLE "new_Tipo_Prod" RENAME TO "Tipo_Prod";
CREATE TABLE "new_Fornecedor" (
    "id_fornecedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa" BOOLEAN NOT NULL,
    "nome_pessoa" TEXT NOT NULL,
    "data_cadastro" TEXT NOT NULL,
    "num_cnpj" TEXT NOT NULL,
    "num_cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome_contato" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "num_rg" TEXT NOT NULL,
    "des_historico" TEXT NOT NULL,
    "nome_cargo" TEXT NOT NULL,
    "ramo_atividade" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "sta_possui_nfe" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "num_insc_estatual" TEXT NOT NULL,
    "prazo_entrega" INTEGER NOT NULL
);
INSERT INTO "new_Fornecedor" ("data_cadastro", "des_historico", "email", "fone", "id_fornecedor", "nome_cargo", "nome_contato", "nome_fantasia", "nome_pessoa", "num_cnpj", "num_cpf", "num_insc_estatual", "num_rg", "pessoa", "prazo_entrega", "ramo_atividade", "sta_possui_nfe", "website") SELECT "data_cadastro", "des_historico", "email", "fone", "id_fornecedor", "nome_cargo", "nome_contato", "nome_fantasia", "nome_pessoa", "num_cnpj", "num_cpf", "num_insc_estatual", "num_rg", "pessoa", "prazo_entrega", "ramo_atividade", "sta_possui_nfe", "website" FROM "Fornecedor";
DROP TABLE "Fornecedor";
ALTER TABLE "new_Fornecedor" RENAME TO "Fornecedor";
CREATE TABLE "new_Movimentacao" (
    "id_mov" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "es" TEXT NOT NULL,
    "data_movto" TEXT NOT NULL,
    "tipo_movto" INTEGER NOT NULL,
    "qtd" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "valor_total" INTEGER NOT NULL,
    "valor_medio" INTEGER NOT NULL,
    "qtd_est_atual" INTEGER NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Movimentacao" ("data_cad", "data_movto", "es", "id_mov", "id_produto", "qtd", "qtd_est_atual", "tipo_movto", "user_cad", "valor", "valor_medio", "valor_total") SELECT "data_cad", "data_movto", "es", "id_mov", "id_produto", "qtd", "qtd_est_atual", "tipo_movto", "user_cad", "valor", "valor_medio", "valor_total" FROM "Movimentacao";
DROP TABLE "Movimentacao";
ALTER TABLE "new_Movimentacao" RENAME TO "Movimentacao";
CREATE TABLE "new_Unidade_Medida" (
    "id_unme" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "des_unidade" TEXT NOT NULL,
    "unid_sigla" TEXT NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Unidade_Medida" ("data_cad", "des_unidade", "id_unme", "unid_sigla", "user_cad") SELECT "data_cad", "des_unidade", "id_unme", "unid_sigla", "user_cad" FROM "Unidade_Medida";
DROP TABLE "Unidade_Medida";
ALTER TABLE "new_Unidade_Medida" RENAME TO "Unidade_Medida";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
