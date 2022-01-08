import React from 'react';
import '../index.css';
import api from '../api/API'
import ListItem from '../components/ListItem.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name": "",
            "equipage": [],
        }
    }

    componentDidMount() {
        this.getEquipage()
    }

    getEquipage = () => {
        api.getEquipage((resp) => {
            this.setState({
                "equipage": resp,
            });
            setTimeout(this.getEquipage, 500);
        });
    }

    postSubmit = (ev) => {
        ev.preventDefault();
        api.postEquipage(this.state.name, () => {
            this.setState({
                "name": ""
            });
        });
        this.setState({
            "name": ""
        });
    }

    nameChange = (ev) => {
        this.setState({
            "name": ev.target.value
        });
    }

    render() {
        const { equipage } = this.state;
        return (
            <main>
                <h2>Ajouter un(e) Argonaute</h2>
                <form className="new-member-form" onSubmit={this.postSubmit}>
                    <label htmlFor="name">Nom de l'Argonaute</label>
                    <input id="name" name="name" type="text" placeholder="Charalampos" value={this.state.name} onChange={this.nameChange} />
                    <button type="submit">Envoyer</button>
                </form>
                <h2>Membres de l'équipage</h2>
                <section className="member-list">
                {
                    equipage
                        .map(t =>
                            <ListItem key={t.id} {...t} name={t.name} />
                        )
                }
            </section>
            </main>
        )
    }
}

export default Main;
