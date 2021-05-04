import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>May 3th 2021</div>
            <div className="expense-item__description">
                <h2>Rent</h2>
                <div className="expense-item__price">$2732.56</div>
            </div>
        </div>

    )
}

export default ExpenseItem;