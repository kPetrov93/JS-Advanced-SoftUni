class LibraryCollection {

    constructor(capacity){
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook (bookName, bookAuthor){

        if(this.books.length >= this.capacity){
            throw new Error("Not enough space in the collection.");
        }else{
            let book ={
                bookName: bookName,
                bookAuthor: bookAuthor,
                payed: false
            }

            this.books.push(book);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook( bookName ) {

        let isFound = false;
        let isPaid = false;
        let currentBook;

        for (let bo of this.books) {
            if(bo.bookName === bookName){
                isFound = true;
                currentBook = bo;
                break;
            }
        }

        if(!isFound){
            throw new Error (`${bookName} is not in the collection.`)
        }
        if(currentBook.payed == false){
            isPaid = true;
        }

        if(!isPaid){
            throw new Error (`${bookName} has already been paid.`)
        }else{
            currentBook.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }

    removeBook(bookName) {

        let isFound = false;
        let isPaid = false;

        for (const boo of this.books) {
            if(boo.bookName === bookName){
                isFound = true;
                if(boo.payed === true){
                    let bookToRemove = boo;
                    let index = this.books.indexOf(bookToRemove);
                    this.books.splice(index,1);
                    isPaid = true;
                    break;
                }
            }
        }

        if(!isFound){
            throw new Error (`The book, you're looking for, is not found.`)
        }

        if(!isPaid){
            throw new Error (`${bookName} need to be paid before removing from the collection.`)
        }else{
            return `${bookName} remove from the collection.`;
        }
    }

    getStatistics(bookAuthor){

        let result = [];

        if(bookAuthor === undefined){
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            this.books.sort((a,b)=> a.bookName.localeCompare(b.bookName));

            for (const elem of this.books) {
                if(elem.payed === true){
                    result.push(`${elem.bookName} == ${elem.bookAuthor} - Has Paid.`)
                }else{
                    result.push(`${elem.bookName} == ${elem.bookAuthor} - Not Paid.`)
                }
            }

        }else{
            let isHere = false;
            for (const el of this.books) {
                if(el.bookAuthor === bookAuthor){
                    isHere = true;
                    break;
                }
            }

            if(!isHere){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }else{
                for (const e of this.books) {
                    if(e.bookAuthor === bookAuthor){
                        if(e.payed === true){
                            result.push(`${e.bookName} == ${e.bookAuthor} - Has Paid.`)
                        }else{
                            result.push(`${e.bookName} == ${e.bookAuthor} - Not Paid.`)
                        }
                        
                    }
                }
            }
        }

        return result.join('\n');
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
