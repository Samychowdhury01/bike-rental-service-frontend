import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";

  

const CustomPagination = ({query, setQuery, totalPages}) => {

    const handlePrevious = () => {
        setQuery((prevQuery) => ({
          ...prevQuery,
          page: prevQuery.page > 1 ? prevQuery.page - 1 : prevQuery.page,
        }));
      };
    
      const handleNext = () => {
        setQuery((prevQuery) => ({
          ...prevQuery,
          page: prevQuery.page < totalPages ? prevQuery.page + 1 : prevQuery.page,
        }));
      };
      
    return (
        <Pagination className="justify-end mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="hover:bg-primary hover:text-white cursor-pointer"
              onClick={handlePrevious
              }
            />
          </PaginationItem>

          <PaginationItem>{query.page}/{totalPages}</PaginationItem>
          <PaginationItem>

            <PaginationNext
              className="hover:bg-primary hover:text-white cursor-pointer"
              onClick={handleNext
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
};

export default CustomPagination;