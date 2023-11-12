-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_material" TEXT NOT NULL,
    "desc_prod" TEXT NOT NULL,
    "marca_prod" TEXT NOT NULL,
    "id_tipo" INTEGER NOT NULL,
    "sta_ativo" TEXT NOT NULL,
    "estoque_min" INTEGER NOT NULL,
    "estoque_max" INTEGER NOT NULL,
    "id_unme" INTEGER NOT NULL,
    "data_incl" DATETIME NOT NULL,
    "user_cad" TEXT NOT NULL,
    "data_cad" DATETIME NOT NULL
);
