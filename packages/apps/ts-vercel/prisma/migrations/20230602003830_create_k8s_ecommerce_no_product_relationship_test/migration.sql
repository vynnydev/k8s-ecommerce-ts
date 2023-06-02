/*
  Warnings:

  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `line_item_id` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_line_item_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_id",
DROP COLUMN "line_item_id",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "lineItemId" TEXT;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "line_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
