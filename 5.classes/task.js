// Task 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.stateValue = state;
        this.type = type;
    }

    fix() {
        this.state = this.stateValue * 1.5
    }

    get state() {
        return this.stateValue
    }

    set state(number) {
        if (number < 0) this.stateValue = 0
        else if (number > 100) this.stateValue = 100
        else this.stateValue = number
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state, 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book'
        this.author = author
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective'
    }
}

// Task 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        let result = null;
        this.books.forEach(book => {
            if (book[type] === value) {
                result = book
            }
        })
        return result;
    }

    giveBookByName(bookName) {
        let result = null;
        this.books.forEach((book, i) => {
            if (book.name === bookName) {
                result = book;
                this.books.splice(i, 1);
            }
        })
        return result;
    }
}


// Task 3
class Student {
    constructor(name) {
        this.name = name;
        this.diary = {};
    }

    addMark(mark, subject) {
        if (mark >= 1 && mark <= 5 && mark % 1 === 0) {
            const dairy = this.diary;
            if (dairy[subject]) {
                dairy[subject].push(mark);
            } else {
                dairy[subject] = [mark];
            }
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5")
        }
    }

    getAverageBySubject(subject) {
        if (this.diary[subject]) {
            const sum = this.diary[subject].reduce((acc, i) => acc + i);
            return sum / this.diary[subject].length;
        } else {
            console.log('Несуществующий предмет')
        }
    }

    getAverage() {
        let sum = 0,
            count = 0;
        for (const subject in this.diary) {
            sum += this.getAverageBySubject(subject)
            count++
        }
        return count === 0 ? 'Нет оценок' : sum / count;
    }
}

