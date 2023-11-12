/*
  Warnings:

  - Added the required column `valor_total` to the `Movimentacao` table without a default value. This is not possible if the table is not empty.

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
    "valor_total" INTEGER NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Movimentacao" ("data_cad", "data_movto", "es", "id_mov", "id_produto", "qtd", "tipo_movto", "user_cad", "valor") SELECT "data_cad", "data_movto", "es", "id_mov", "id_produto", "qtd", "tipo_movto", "user_cad", "valor" FROM "Movimentacao";
DROP TABLE "Movimentacao";
ALTER TABLE "new_Movimentacao" RENAME TO "Movimentacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
