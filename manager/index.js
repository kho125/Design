function managerPlusInput() {
    // const resultElement = document.getElementById('result');
    let insertHtml = `
        <div class="contents manager-item" id="manager-delete">
            <span></span>
            <input type="text">
            <input type="text">
            <button type="submit" class="change-btn">저장</button>
            <button type="button" class="delete-btn" value="삭제" onclick="manageDeleteDiv()">삭제</button>
        </div>
    `
    let childrenCount = document.getElementsByClassName("manager-item").length
    document.getElementsByClassName("manager-item")[childrenCount - 1].insertAdjacentHTML("afterend", insertHtml)
}

function manageDeleteDiv() {
    const div = document.getElementById('manager-delete');

    div.remove();
} 

function secondManagerPlusInput() {
    // const resultElement = document.getElementById('result');
    let insertHtml = `
        <div class="contents second-manager-item" id="second-manager-delete">
            <span></span>
            <input type="text">
            <input type="text">
            <button type="submit" class="change-btn">저장</button>
            <button type="button" class="delete-btn" value="삭제" onclick="secondManagerDeleteDiv()">삭제</button>
        </div>
    `
    let childrenCount = document.getElementsByClassName("second-manager-item").length
    document.getElementsByClassName("second-manager-item")[childrenCount - 1].insertAdjacentHTML("afterend", insertHtml)
}

function secondManagerDeleteDiv() {
    const div = document.getElementById('second-manager-delete');

    div.remove();
} 