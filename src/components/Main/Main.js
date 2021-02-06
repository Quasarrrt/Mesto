import profilePic from "../../images/profile_pic.jpg";
import editAvatar from "../../images/editAvatar.svg";
import editButton from "../../images/EditButton.svg";
import addButton from "../../images/AddButton.svg";

function Main() {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <img src={profilePic} className="profile__avatar" alt="Фото профиля"/>
                        <img src={editAvatar} className="profile__edit-avatar" alt="Изменить"/>


                    </div>
                    <div className="profile__info">
                        <div className="profile__wrapper">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__edit-button" type="button"><img className="profile__img-edit"
                                                                                        src={editButton}
                                                                                        alt="изменить"/></button>
                        </div>
                        <p className="profile__activity">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button"><img src={addButton}
                                                                           alt="Добавить"/></button>
            </section>
            <section className="photo-cards">
                <ul className="cards">
                </ul>
            </section>
        </main>
)
}
export default Main;