class SwipeSlider {
    constructor(selector, options) {
        let defaultOptions = {
            whneeScrolling: false,
        };
        this.container = document.querySelector(selector);
        this.options = Object.assign(defaultOptions, options); // копируем исход. объект, возвр. при этом новый объект. Если в options ничего не передаётся, тогда данные передаёт из defaulO..
        if (!this.container) {
            console.error('Селектора не существует');
            return;
        }
        this.isDragging = false;  // это перетаскивание
        this.startX = null;
        this.scrollLeft = null;
        this.events();
    }
    events() {
        if (this.container) {
            this.container.addEventListener('mousedown', (event) => {
                console.log('Мы здесь');
                this.isDragging = true; // мы нажали на блок
                this.startX = event.pageX - this.container.offsetLeft; // стартовая позиция нахождения курсора
                this.scrollLeft = this.container.scrollLeft; // находим расстояние от положения курсора до начала блока
            });
            this.container.addEventListener('mouseup', (event) => {
                this.isDragging = false; // для того, чтобы, когда отпускаем копку мыши, элементы перестали двигаться
            });
            this.container.addEventListener('mousemove', (event) => {
                if (!this.isDragging)
                    return;
                const x = event.pageX - this.container.offsetLeft; // что бы всегда понимать на какой позиции находится мышка
                const walkX = (x - this.startX) * 1; // получаем сдвиг курсора при нажатой кнопки мыши
                this.container.scrollLeft = this.scrollLeft - walkX; // движение элементов
            });
            this.container.addEventListener('mouseleave', (event) => {
                if (this.isDragging) {
                    this.isDragging = false;
                }
            });
            if (this.options.whneeScrolling) {
                this.container.addEventListener('wheel', (event) => {
                    this.cintainer.scrollLeft += event.deltaY; // узнаём, сколько скролим колесом
                })
            }
        }
    }
}
