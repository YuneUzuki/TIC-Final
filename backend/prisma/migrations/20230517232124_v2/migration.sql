-- CreateTable
CREATE TABLE "Unidade_Medida" (
    "id_unme" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "des_unidade" TEXT NOT NULL,
    "unid_sigla" TEXT NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" DATETIME NOT NULL
);
