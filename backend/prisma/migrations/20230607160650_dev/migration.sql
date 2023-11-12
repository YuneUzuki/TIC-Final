/*
  Warnings:

  - You are about to drop the column `qtd_est_atual` on the `Movimentacao` table. All the data in the column will be lost.
  - You are about to drop the column `valor_medio` on the `Movimentacao` table. All the data in the column will be lost.
  - You are about to drop the column `valor_total` on the `Movimentacao` table. All the data in the column will be lost.
  - You are about to drop the column `sta_ativo` on the `Tipo_Movimento` table. All the data in the column will be lost.
  - You are about to drop the column `sta_tipo_mov` on the `Tipo_Movimento` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movimentacao" (
    "id_mov" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "es" TEXT NOT NULL,
    "data_movto" TEXT NOT NULL,
    "tipo_movto" INTEGER NOT NULL,
    "qtd" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Movimentacao" ("data_cad", "data_movto", "es", "id_mov", "id_produto", "qtd", "tipo_movto", "user_cad", "valor") SELECT "data_cad", "data_movto", "es", "id_mov", "id_produto", "qtd", "tipo_movto", "user_cad", "valor" FROM "Movimentacao";
DROP TABLE "Movimentacao";
ALTER TABLE "new_Movimentacao" RENAME TO "Movimentacao";
CREATE TABLE "new_Tipo_Movimento" (
    "id_tipo_mov" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc_tipo_mov" TEXT NOT NULL,
    "desc_obs" TEXT NOT NULL
);
INSERT INTO "new_Tipo_Movimento" ("desc_obs", "desc_tipo_mov", "id_tipo_mov") SELECT "desc_obs", "desc_tipo_mov", "id_tipo_mov" FROM "Tipo_Movimento";
DROP TABLE "Tipo_Movimento";
ALTER TABLE "new_Tipo_Movimento" RENAME TO "Tipo_Movimento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
