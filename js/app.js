const DateTime = luxon.DateTime;

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      currentIndex: 0,
      textMessage: "",
      searchInput: "",
    };
  },

  methods: {
    selectContact(i) {
      this.currentIndex = i;
    },
    newMessage() {
      const index = this.currentIndex;
      const message = {
        date: DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE),
        message: this.textMessage,
        status: "sent",
      };

      const receivedMessage = {
        date: DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE),
        message: this.textMessage,
        status: "received",
      };
      this.contacts[index].messages.push(message);
      this.textMessage = "";

      setTimeout(() => {
        const receivedMessage = {
          date: DateTime.now().toLocaleString(
            DateTime.toFormat("dd/MM/yyyy HH:mm:ss")
          ),
          message: "ok",
          status: "received",
        };
        this.contacts[index].messages.push(receivedMessage);
      }, 1000);
    },

    deleteMessage(i) {
      console.log(this.contacts[this.currentIndex].messages[i].message);

      this.contacts[this.currentIndex].messages.splice(i, 1);

      //   const index = this.currentIndex;
      //   let indexMessage = 0;
      //   const messages = this.contacts[index].messages;
      //   for (i = 0; i < messages.length; i++) {
      //     console.log(messages[indexMessage].message);
      //   }
    },

    dateFormat(date) {
      //   for (i = 0; i < this.contacts.length; i++) {
      //     const messages = this.contacts[i].messages;
      //     for (j = 0; j < messages.length; j++) {
      //       let date = messages[j].date;

      const dateFormatted = DateTime.fromFormat(
        date,
        "dd/MM/yyyy HH:mm:ss"
      ).toLocaleString(DateTime.TIME_24_SIMPLE);

      //   date = dateFormatted;
      return dateFormatted;
    },

    /*
    searchContacts() {
      for (i = 0; i > this.contacts.length; i++) {
        const name = this.contacts[i].name;
        // const result = this.contact.name.match(this.searchInput);
        console.log(this.contacts.length);
      }
    },
    */
  },

  computed: {
    currentContact() {
      return this.contacts[this.currentIndex];
    },

    searchContacts() {
      return this.contacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    },
  },
  mounted() {
    console.log("VUE OK");
  },
}).mount("#app");
