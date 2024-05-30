import React from 'react';

const ItemHome = () => {
    return (
        <div className="notice_div">
            <h2>Note:</h2>
            <ul className="notice">
                <li>Select item from the menu to:
                    <ul>
                        <li>View the selected item's summary</li>
                        <li>Buy a selected item</li>
                    </ul>
                </li>
                <li>Login as administrator to:
                    <ul>
                        <li>Add stock of a selected item</li>
                        <li>Edit stock of a selected item</li>
                        <li>Reset the selected item's stock</li>
                        <li>Reset the selected item's price</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ItemHome;