import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from '../Footer/Footer'
function App() {
  return (
      <>
      <div className="page">
        <Header/>
        <Main/>
        <Footer/>
      </div>
  <div className="popup popup_edit">
    <div className="popup__content">
      <button type="button" className="popup__close popup__close_edit"></button>
      <h3 className="popup__title">Редактировать профиль</h3>
      <form name="change-title" className="popup__form popup__form_edit">
        <input required minLength="2" maxLength="40" type="text" name="profile-name" placeholder="Имя" id="profile-name"
               className="popup__input popup__input_type_name popup__input_profile-name"/>
          <span id="profile-name-error" className="popup__error"></span>
          <input required minLength="2" maxLength="200" type="text" name="profile-activity" placeholder="Профессия"
                 id="profile-activity"
                 className="popup__input popup__input_type_activity popup__input_profile-activity"/>
            <span id="profile-activity-error" className="popup__error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup popup_add">
    <div className="popup__content">
      <button type="button" className="popup__close popup__close_add"></button>
      <h3 className="popup__title">Новое место</h3>
      <form name="change-title" className="popup__form popup__form_add">
        <input required minLength="2" maxLength="30" type="text" name="name" placeholder="Название" id="card-name"
               className="popup__input popup__input_type_name popup__input_card-name"/>
          <span id="card-name-error" className="popup__error"></span>
          <input required type="url" name="link" placeholder="Ссылка на картинку" id="card-url"
                 className="popup__input popup__input_type_activity popup__input_card-link"/>
            <span id="card-url-error" className="popup__error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup popup_photo">
    <div className="popup__photo-container">
      <button type="button" className="popup__close popup__close_photo"></button>
      <img className="popup__photo" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
           alt="Фото"/>
        <p className="popup__photo-title">Что-то</p>
    </div>
  </div>
  <div className="popup popup_card-delete">
    <div className="popup__content">
      <button type="button" className="popup__close popup__close_delete-card"></button>
      <h3 className="popup__title popup__title_margin-null">Вы уверены?</h3>
      <form name="delete-card" className="popup__form popup__form_delete-card">
        <button type="submit" className="popup__save">Да</button>
      </form>

    </div>
  </div>
  <div className="popup popup_edit-avatar">
    <div className="popup__content">
      <button type="button" className="popup__close popup__close_edit-avatar"></button>
      <h3 className="popup__title popup__title_margin-null">Обновить аватар</h3>
      <form name="change-title" className="popup__form popup__form_edit-avatar">
        <input required type="url" name="link" placeholder="Ссылка на аватар" id="avatar-link" className="popup__input"/>
          <span id="avatar-link-error" className="popup__error"></span>
          <button type="submit" className="popup__save">Сохранить</button>
      </form>
    </div>
  </div>
      </>
  );
}

export default App;
