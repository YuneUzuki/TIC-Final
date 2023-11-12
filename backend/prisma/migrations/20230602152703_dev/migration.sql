/*
  Warnings:

  - You are about to alter the column `sta_controla_val` on the `Tipo_Prod` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `sta_mov_estoque` on the `Tipo_Prod` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tipo_Prod" (
    "id_tipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "segmento" TEXT NOT NULL,
    "sta_controla_val" BOOLEAN NOT NULL,
    "sta_mov_estoque" BOOLEAN NOT NULL,
    "ueps_peps" TEXT NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" TEXT NOT NULL
);
INSERT INTO "new_Tipo_Prod" ("data_cad", "id_tipo", "segmento", "sta_controla_val", "sta_mov_estoque", "ueps_peps", "user_cad") SELECT "data_cad", "id_tipo", "segmento", "sta_controla_val", "sta_mov_estoque", "ueps_peps", "user_cad" FROM "Tipo_Prod";
DROP TABLE "Tipo_Prod";
ALTER TABLE "new_Tipo_Prod" RENAME TO "Tipo_Prod";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
