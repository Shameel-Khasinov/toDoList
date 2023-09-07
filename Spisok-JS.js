const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i <this.items.length; i++) {
            this.print(i)
        }
     },

    add: function (text) {
        const obj = {
            text: text,
            completed: false};

        this.items.unshift(obj)
     },

    remove: function (index) {
        this.items.splice(index, 1)
     },

    print: function (index) {
        this.items[index].completed === false? console.log("[ ] " + this.items[index].text) : console.log("[x] " + this.items[index].text)
     },

    complete: function (index) { 
        this.items[index].completed = !this.items[index].completed
    },
};





todoList.complete(1)
todoList.printAll()