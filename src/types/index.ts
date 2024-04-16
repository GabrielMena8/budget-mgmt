

export type Category = {
    id: string,
    name: string,
    icon: string
}


export type Expense = {
    id: string,
    name: string,
    amount: number,
    category: Category,
    date: Date
}


export type DraftExpense = Omit<Expense, 'id'>;

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];
