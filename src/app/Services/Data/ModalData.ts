export class ModalData {
  public data: any = {
    currentModal: '',
    savedModal: '',
    modalParams: {
      bonus: {
        close: true,
        closePositions: { x: -50, y: 10 },
        title: 'BUY WILD BONUS',
        data: {}
      },
      game_info: {
        close: true,
        closePositions: { x: 70, y: 70 },
        activeTab: '',
        title: '',
        data: {},
      },
      info: {
        infoText: '',
        title: '',
        data: {},
        buttons: [
          { text: 'OK', backgroundColor: '#F3C202', action: 'closeGame', actionData: {} }
        ]
      },
      bonus_type: {
        headText: '',
        infoText: '',
        title: '',
        data: {},
        buttons: [
          { text: 'OK', backgroundColor: 'linear-gradient(#F57403, #D7340F)', action: 'toggleModal', actionData: { modal: ''} }
        ]
      },
      bonus_win: {
        title: '',
        ammount: 0,
        data: {},
        buttons: [
          { text: 'OK', backgroundColor: 'linear-gradient(#F57403, #D7340F)', action: 'toggleModal', actionData: { modal: ''} }
        ]
      }
    }
  };
}
