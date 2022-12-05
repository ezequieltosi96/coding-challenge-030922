export class ToDo {
    constructor(public id: number,
                public title: string,
                public description: string,
                public spentTime: number,
                public completed: boolean) {

    }
}

export class ToDoViewModel {
    constructor(public id: number,
                public title: string,
                public description: string,
                public spentTime: number,
                public hover: boolean,
                public playing: boolean,
                public completed: boolean) {

    }
}