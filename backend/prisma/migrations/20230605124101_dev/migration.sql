/*
  Warnings:

  - You are about to drop the column `des_historico` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the column `nome_cargo` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the column `nome_contato` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the column `num_cnpj` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the column `num_rg` on the `Fornecedor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fornecedor" (
    "id_fornecedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa" BOOLEAN NOT NULL,
    "nome_pessoa" TEXT NOT NULL,
    "data_cadastro" TEXT NOT NULL,
    "num_cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "ramo_atividade" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "sta_possui_nfe" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "num_insc_estatual" TEXT NOT NULL,
    "prazo_entrega" INTEGER NOT NULL
);
INSERT INTO "new_Fornecedor" ("data_cadastro", "email", "fone", "id_fornecedor", "nome_fantasia", "nome_pessoa", "num_cpf", "num_insc_estatual", "pessoa", "prazo_entrega", "ramo_atividade", "sta_possui_nfe", "website") SELECT "data_cadastro", "email", "fone", "id_fornecedor", "nome_fantasia", "nome_pessoa", "num_cpf", "num_insc_estatual", "pessoa", "prazo_entrega", "ramo_atividade", "sta_possui_nfe", "website" FROM "Fornecedor";
DROP TABLE "Fornecedor";
ALTER TABLE "new_Fornecedor" RENAME TO "Fornecedor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
