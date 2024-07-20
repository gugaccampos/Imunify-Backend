-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Agendamentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_hora" DATETIME NOT NULL,
    "nascimento" DATETIME NOT NULL,
    "realizado" TEXT,
    "idUsuario" TEXT NOT NULL,
    CONSTRAINT "Agendamentos_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
