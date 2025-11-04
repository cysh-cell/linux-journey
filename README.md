#  Linux Journey — Интерактивный курс по Linux

Изучайте Linux легко и бесплатно! Этот курс работает прямо в браузере — никаких установок ОС не требуется.

---

##  Как запустить курс локально с помощью Docker

>  **Docker** — это инструмент, который позволяет запускать приложения в изолированных «контейнерах». Благодаря ему вы можете запустить курс на любом компьютере — независимо от вашей операционной системы.

###  Шаг 1: Установите Docker

- **Windows / Mac**:  
  Скачайте и установите [Docker Desktop](https://www.docker.com/products/docker-desktop/).  
  После установки **перезагрузите компьютер**.

- **Linux**:  
  Установите Docker через пакетный менеджер:
  ```bash
  sudo apt update
  sudo apt install docker.io docker-compose
  sudo usermod -aG docker $USER
  ```
  
### Шаг 2: Запустите курс
- **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/ваш-ник/linux-journey.git
    cd linux-journey
    ```
- **Соберите и запустите контейнер:**
    ```bash
    docker build -t linux-journey .
    docker run -d -p 8080:80 linux-journey
    ```
- **Откройте в браузере:**
    ```
    http://localhost:8080
    ```
  
## Как добавлять новые курсы
Все материалы хранятся в JS-файле. Чтобы добавить новый урок:
- Откройте `scripts/app.js`
- Добавьте объект в массив (или создайте новый)
- Пересобирите образ:
    ```bash
    docker build -t linux-journey .
    docker run -d -p 8080:80 linux-journey
    ```
