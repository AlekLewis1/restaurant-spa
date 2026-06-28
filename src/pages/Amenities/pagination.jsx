/*
Description: Pagination and sorting component for the Amenities page
*/

import {settings} from "../../config/config";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Pagination = ({amenities, setUrl}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [sort, setSort] = useState("amenity_name:asc");
    const [pages, setPages] = useState({});

    useEffect(() => {
        if(amenities) {
            let pages = {};
            setLimit(amenities.limit);
            setOffset(amenities.offset);
            setTotalPages(Math.ceil(amenities.totalCount/limit));
            setCurrentPage(amenities.offset/amenities.limit + 1);

            amenities.links.map((link) => {
                pages[link.rel] = link.href;
            });

            if(!pages.hasOwnProperty('prev')) {
                pages.prev = pages.self;
            }

            if(!pages.hasOwnProperty('next')) {
                pages.next = pages.self;
            }
            setPages(pages);
        }
    },[amenities]);

    const handlePageClick = (e) => {
        setUrl(e.target.id + "&sort=" + sort);
    }

    const setItemsPerPage = (e) => {
        setLimit(e.target.value);
        setOffset(0);
        setUrl(`${settings.baseApiUrl}/amenities?limit=${e.target.value}&offset=0&sort=${sort}`);
    }

    const sortAmenities = (e) => {
        setSort(e.target.value);
        setUrl(`${settings.baseApiUrl}/amenities?limit=${limit}&offset=${offset}&sort=${e.target.value}`);
    }

    return (
        <>
            {amenities && <div className="course-pagination-container">
                <div className="course-pagination">
                    Showing page {currentPage} of {totalPages}&nbsp;
                    <Link to="#" title="First page" id={pages.first} onClick={handlePageClick}> &lt;&lt; </Link>
                    <Link to="#" title="Previous page" id={pages.prev} onClick={handlePageClick}> &lt; </Link>
                    <Link to="#" title="Next page" id={pages.next} onClick={handlePageClick}> &gt; </Link>
                    <Link to="#" title="Last page" id={pages.last} onClick={handlePageClick}> &gt;&gt; </Link>
                    Items per page &nbsp;
                    <select onChange={setItemsPerPage} defaultValue="10">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div className="course-sorting"> Sort by:&nbsp;
                    <select onChange={sortAmenities}>
                        <option value="amenity_name:asc">Name A-Z</option>
                        <option value="amenity_name:desc">Name Z-A</option>
                        <option value="description:asc">Description A-Z</option>
                        <option value="description:desc">Description Z-A</option>
                    </select>
                </div>
            </div>}
        </>
    );
};

export default Pagination;
