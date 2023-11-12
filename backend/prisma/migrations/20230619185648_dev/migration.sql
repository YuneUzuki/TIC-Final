-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Forn_Prod" (
    "id_fornprod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_fornecedor" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    CONSTRAINT "Forn_Prod_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Forn_Prod_id_fornecedor_fkey" FOREIGN KEY ("id_fornecedor") REFERENCES "Fornecedor" ("id_fornecedor") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Forn_Prod" ("id_fornecedor", "id_fornprod", "id_produto") SELECT "id_fornecedor", "id_fornprod", "id_produto" FROM "Forn_Prod";
DROP TABLE "Forn_Prod";
ALTER TABLE "new_Forn_Prod" RENAME TO "Forn_Prod";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
