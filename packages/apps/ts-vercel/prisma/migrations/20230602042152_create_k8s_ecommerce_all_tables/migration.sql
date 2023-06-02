/*
  Warnings:

  - You are about to drop the `ShippingAddress` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[order_id]` on the table `line_items` will be added. If there are existing duplicate values, this will fail.
  - Made the column `categoryId` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lineItemId` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ShippingAddress" DROP CONSTRAINT "ShippingAddress_account_id_fkey";

-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_shipping_address_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_lineItemId_fkey";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "categoryId" SET NOT NULL,
ALTER COLUMN "lineItemId" SET NOT NULL;

-- DropTable
DROP TABLE "ShippingAddress";

-- CreateTable
CREATE TABLE "shipping_addresses" (
    "id" TEXT NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "postal_code" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "account_id" TEXT,

    CONSTRAINT "shipping_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "line_items_order_id_key" ON "line_items"("order_id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "line_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_shipping_address_id_fkey" FOREIGN KEY ("shipping_address_id") REFERENCES "shipping_addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_addresses" ADD CONSTRAINT "shipping_addresses_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
