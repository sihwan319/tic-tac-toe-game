function openPlayerConfig(event) { 
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOverLayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverLayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault(); // 'submit' event의 기본 동작은 버튼을 클릭할 경우 브라우저가 HTTP 요청을 서버에게 보냄. -> 이 동작을 막음
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if(!enteredPlayername) { //enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;


    players[editedPlayer - 1].name = enteredPlayername;
    // if(editedPlayer === 1 ) {
    //     player[0].name = enteredPlayername;
    // } else {
    //     player[1].name = enteredPlayername;
    // }

    closePlayerConfig();

}