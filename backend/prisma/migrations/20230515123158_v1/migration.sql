-- CreateTable
CREATE TABLE "Tipo_Prod" (
    "id_tipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "segmento" TEXT NOT NULL,
    "sta_controla_val" TEXT NOT NULL,
    "sta_mov_estoque" TEXT NOT NULL,
    "ueps_peps" TEXT NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id_fornecedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa" BOOLEAN NOT NULL,
    "nome_pessoa" TEXT NOT NULL,
    "data_cadastro" DATETIME NOT NULL,
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

-- CreateTable
CREATE TABLE "Forn_Prod" (
    "id_fornprod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_fornecedor" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Tipo_Movimento" (
    "id_tipo_mov" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc_tipo_mov" TEXT NOT NULL,
    "desc_obs" TEXT NOT NULL,
    "sta_ativo" TEXT NOT NULL,
    "sta_tipo_mov" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Movimentacao" (
    "id_mov" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "es" TEXT NOT NULL,
    "data_movto" DATETIME NOT NULL,
    "tipo_movto" INTEGER NOT NULL,
    "qtd" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "valor_total" INTEGER NOT NULL,
    "valor_medio" INTEGER NOT NULL,
    "qtd_est_atual" INTEGER NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" DATETIME NOT NULL
);
