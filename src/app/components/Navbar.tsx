import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Search, Moon, Sun, Upload, Menu, Filter } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { FilterPanel } from "./FilterPanel";
import { Button } from "./ui/button";

interface NavbarProps {
  toggleSidebar: () => void;
}

export function Navbar({ toggleSidebar }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = React.useState(searchParams.get("q") || "");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="flex h-16 items-center px-4 md:px-6">
        <button
          onClick={toggleSidebar}
          className="mr-4 block md:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link
          to="/"
          className="mr-6 flex items-center space-x-2 font-bold text-xl md:text-2xl text-blue-600 dark:text-blue-400"
        >
          <img
            className="w-[50px]"
            src="https://res.cloudinary.com/dsmyka9cr/image/upload/v1770575382/nitplogo_je6ekp.png"
            alt="logo"
          />
          <span>NITP Access Point</span>
        </Link>

        <div className="flex flex-1 items-center justify-center max-w-xl mx-auto gap-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <input
              type="search"
              placeholder="Search resources..."
              className="w-full rounded-full border border-gray-200 bg-gray-100 pl-9 pr-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
              value={query}
              onChange={handleSearch}
            />
          </div>
          <Popover open={filterOpen} onOpenChange={setFilterOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shrink-0"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  {/* Close button is handled by popover usually, but let's add one if needed */}
                </div>
                {/* Reuse FilterPanel logic but pass params */}
                <FilterPanelContent />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            title="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2" />
            <span className="sr-only">Toggle theme</span>
          </button>

          <Button
            onClick={() =>
              toast.success("Feature coming soon! Thanks for your interest.")
            }
            className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
          >
            <Upload className="h-4 w-4" />
            <span>Contribute</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function FilterPanelContent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const currentSemester = searchParams.get("semester");
  const currentType = searchParams.get("type");

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Semester</label>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <button
              key={sem}
              onClick={() =>
                updateFilter(
                  "semester",
                  currentSemester === sem.toString() ? null : sem.toString(),
                )
              }
              className={`px-2 py-1 text-xs rounded border transition-colors ${
                currentSemester === sem.toString()
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              }`}
            >
              Sem {sem}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Type</label>
        <div className="flex flex-wrap gap-2">
          {["pyq", "notes", "book"].map((type) => (
            <button
              key={type}
              onClick={() =>
                updateFilter("type", currentType === type ? null : type)
              }
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                currentType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Year</label>
        <div className="flex flex-wrap gap-2">
          {[2024, 2023, 2022, 2021].map((year) => (
            <button
              key={year}
              onClick={() =>
                updateFilter(
                  "year",
                  searchParams.get("year") === year.toString()
                    ? null
                    : year.toString(),
                )
              }
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                searchParams.get("year") === year.toString()
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => setSearchParams(new URLSearchParams())}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}
