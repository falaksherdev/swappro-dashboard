"use client";
import { useState } from "react";
import Topbar from "../../../components/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../../../components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Columns2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SeparatorHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function ProductsPage() {
  const [searchProduct, setSearchProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const itemsPerPage = 6;

  const products = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/4/2026",
      status: "Active",
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/4/2026",
      status: "Active",
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "11",
      lastModified: "5/4/2026",
      status: "Active",
    },
    {
      id: 4,
      name: "iPhone 16 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/4/2026",
      status: "Active",
    },
    {
      id: 5,
      name: "iPhone 14 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/4/2026",
      status: "In-active",
    },
    {
      id: 6,
      name: "iPhone 17 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/4/2026",
      status: "Active",
    },
    {
      id: 7,
      name: "iPhone 16 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/3/2026",
      status: "Active",
    },
    {
      id: 8,
      name: "iPhone 16 Pro Max",
      category: "Mobile Phones",
      brand: "Apple",
      variants: "12",
      lastModified: "5/4/2026",
      status: "Active",
    },
    {
      id: 9,
      name: "Samsung S24 Ultra",
      category: "Mobile Phones",
      brand: "Samsung",
      variants: "8",
      lastModified: "5/2/2026",
      status: "Active",
    },
    {
      id: 10,
      name: "Google Pixel 8",
      category: "Mobile Phones",
      brand: "Google",
      variants: "6",
      lastModified: "5/1/2026",
      status: "Active",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchProduct.toLowerCase());
    const matchesStatus = !selectedStatus || product.status === selectedStatus;
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    return matchesSearch && matchesStatus && matchesCategory && matchesBrand;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleSelectAll = () => {
    if (selectedRows.length === paginatedProducts.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedProducts.map((p) => p.id));
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#F5F5F5]">
        <AppSidebar />

        <main className="flex-1 bg-white flex gap-[24] flex-col  overflow-x-hidden">
          <Topbar />
          <div className="flex items-center px-6 h-8">
            <h1 className="text-2xl font-semibold leading-8">Products</h1>
          </div>
          <div className="px-6">
            <div className=" border rounded-xl border-[#E5E5E5] ">
              <div className="flex items-center justify-between h-[66px] px-4">
                <div className="flex items-center gap-2 ">
                  <Button
                    variant="outline"
                    className="h-10 w-[116px] gap-2 rounded-md border border-[#E5E5E5] px-4 text-[#0A0A0A]"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="text-sm">Status</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-10 w-[116px] gap-2 rounded-md border border-[#E5E5E5] px-4 text-[#0A0A0A]"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="text-sm">Category</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-10 w-[116px] gap-2 rounded-md border border-[#E5E5E5] px-4 text-[#0A0A0A]"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Brand</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-[40px] w-[40px] rounded-md flex items-center justify-center border border-[#E5E5E5]"
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-[16px]">
                  <div className="flex items-center h-[32px] w-[324px]   px-2 gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-[20px] w-[20px]"
                    >
                      <Columns2 className="h-[20px] w-[20px]" />
                    </Button>

                    <Input
                      placeholder="Search product"
                      className="h-8 w-[288px] border border-[#E5E5E5] rounded-md px-3 py-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-[#E5E5E5] h-[54px]">
                        <TableHead className="w-[49px] min-w-[49px] max-w-[49px] text-center">
                          <Checkbox
                            checked={
                              selectedRows.length ===
                                paginatedProducts.length &&
                              paginatedProducts.length > 0
                            }
                            onCheckedChange={handleSelectAll}
                            className="m-auto data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 border border-[#E5E5E5]"
                          />
                        </TableHead>

                        <TableHead className="w-[410px] min-w-[410px] text-[#737373] font-medium text-sm leading-sm">
                          Name
                        </TableHead>

                        <TableHead className="w-[154px] min-w-[154px] text-[#737373] font-medium text-sm leading-sm">
                          <div className="flex items-center gap-[10px]">
                            Category
                            <SeparatorHorizontal className="w-4 h-4" />
                          </div>
                        </TableHead>

                        <TableHead className="w-[120px] min-w-[120px] text-[#737373] font-medium text-sm leading-sm">
                          <div className="flex items-center gap-[10px]">
                            Brand
                            <SeparatorHorizontal className="w-4 h-4" />
                          </div>
                        </TableHead>

                        <TableHead className="w-[120px] min-w-[120px] text-[#737373] font-medium text-sm leading-sm">
                          <div className="flex items-center gap-[10px]">
                            Variants
                            <SeparatorHorizontal className="w-4 h-4" />
                          </div>
                        </TableHead>

                        <TableHead className="w-[131px] min-w-[131px] text-[#737373] font-medium text-sm leading-sm">
                          <div className="flex items-center gap-[10px]">
                            Last Modified
                            <SeparatorHorizontal className="w-4 h-4" />
                          </div>
                        </TableHead>

                        <TableHead className="w-[128px] min-w-[128px] text-[#737373] font-medium text-sm leading-sm">
                          <div className="flex items-center gap-[10px]">
                            Status
                            <SeparatorHorizontal className="w-4 h-4" />
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {paginatedProducts.map((product) => (
                        <TableRow
                          key={product.id}
                          className="hover:bg-gray-50 transition border-b border-[#E5E5E5] h-[54px]"
                        >
                          <TableCell className="w-[49px]">
                            <Checkbox
                              checked={selectedRows.includes(product.id)}
                              onCheckedChange={() =>
                                handleSelectRow(product.id)
                              }
                              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 place-self-center border border-[#E5E5E5]"
                            />
                          </TableCell>

                          <TableCell className="w-[410px] p-2">
                            <div className="flex items-center gap-[16]">
                              <img
                                src="https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="iPhone"
                                className="w-[36px] h-[36px] rounded-[4px] object-cover"
                              />

                              <span className="text-sm font-normal leading-5 text-[#171717] align-middle">
                                {product.name}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell className="w-[154px] text-sm font-normal leading-5 text-[#737373]">
                            {product.category}
                          </TableCell>

                          <TableCell className="w-[120px]  text-sm font-normal leading-5 text-[#737373]">
                            {product.brand}
                          </TableCell>

                          <TableCell className="w-[120px]  text-sm font-normal leading-5 text-[#737373]">
                            {product.variants}
                          </TableCell>

                          <TableCell className="w-[131px]  text-sm font-normal leading-5 text-[#737373]">
                            {product.lastModified}
                          </TableCell>

                          <TableCell className="w-[128px]">
                            <span
                              className={`
                                inline-flex items-center justify-center
                                h-5
                                rounded-sm
                                px-1.5 py-0.5
                                text-xs font-medium leading-4
                                ${
                                  product.status === "Active"
                                    ? "w-[48px] bg-[rgba(22,163,74,0.1)] text-green-700"
                                    : "w-[62px] bg-[rgba(224,52,52,0.1)] text-red-700"
                                }
                              `}
                            >
                              {product.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="p-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-[#737373]">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(
                      startIndex + itemsPerPage,
                      filteredProducts.length,
                    )}{" "}
                    of {filteredProducts.length} entries
                  </p>

                  <Pagination className="mx-0 w-auto">
                    <PaginationContent className="gap-[4px]">
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(Math.max(1, currentPage - 1));
                          }}
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>

                      {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                        let pageNum;

                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }

                        return (
                          <PaginationItem key={i}>
                            <PaginationLink
                              isActive={currentPage === pageNum}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(pageNum);
                              }}
                              className={`cursor-pointer h-[36px] w-[36px] ${
                                currentPage === pageNum
                                  ? "bg-[#171717] text-white hover:bg-[#171717]"
                                  : "text-gray-600 bg-[#1717171A] hover:bg-[#1717171A]"
                              }`}
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}

                      <PaginationItem>
                        <PaginationNext
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1),
                            );
                          }}
                          className={
                            currentPage === totalPages || totalPages === 0
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
