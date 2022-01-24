import React, { useEffect, useState } from "react";

export default function ListNav(props) {
    let page = props.page;
    let totalPage = props.totalPage;
    let items = setItems();
    let url = props.url;

    function setItems() {

        let item = []
        if (page < 3) {
            for (let i = 1; i < ((totalPage < 4) ? totalPage + 1 : 4); i++) {
                if (i == page) {
                    item.push(<a key={i} className="list__nav--active" href={i}>{i}</a>);
                    continue;
                }
                item.push(<a key={i} href={i}>{i}</a>);
            }
            if (totalPage > 4) {
                item.push(<p key={totalPage + 'p'}>---</p>)
                item.push(<a key={totalPage} href={totalPage}>{totalPage}</a>)
            }

            return item
        }

        if (page == 3) {
            for (let i = 1; i < 5; i++) {
                if (i == page) {
                    item.push(<a key={i} className="list__nav--active" href={i}>{i}</a>);
                    continue;
                }
                item.push(<a key={i} href={i}>{i}</a>);
            }
            item.push(<p key={totalPage + 'p'}>---</p>)
            item.push(<a key={totalPage} href={totalPage}>{totalPage}</a>)
            return item
        }

        if (page > 3 && page <= totalPage - 3) {
            item.push(<a key={1} href={1}>1</a>)
            item.push(<p key={totalPage + 'p'}>---</p>)
            item.push(<a key={(page - 1)} href={(page - 1)}>{page - 1}</a>);
            item.push(<a key={page} className="list__nav--active" href={(page)}>{page}</a>);
            item.push(<a key={(page - 0 + 1)} href={(page - 0 + 1)}>{page - 0 + 1}</a>);
            item.push(<p key={totalPage + 'p2'}>---</p>)
            item.push(<a key={totalPage} href={totalPage}>{totalPage}</a>)
            return item
        }

        if (page >= totalPage - 2) {
            item.push(<a key={1} href={1}>1</a>)
            item.push(<p key={totalPage + 'p'}>---</p>)
            for (let i = totalPage - 2; i <= totalPage; i++) {
                if (i == page) {
                    item.push(<a key={i} className="list__nav--active" href={i}>{i}</a>);
                    continue;
                }
                item.push(<a key={i} href={i}>{i}</a>);
            }
            return item

        }

    }

    return (
        <div key={totalPage * page} className='list__nav'>
            {items}
        </div>
    )
}