# Sound Around

[Djello](https://djello-tasks.herokuapp.com/) is a single-page web application for managing collaborative task-management.

## Technology

This app is built with Ruby on Rails and Angular 1.6.

User data is persisted using a PostgreSQL database.

Styling is using Twitter Bootstrap.

## Live version

Visit [djello-tasks.herokuapp.com/](https://djello-tasks.herokuapp.com/) to see a fully functional live version. This is hosted on a free Heroku dyno, so please allow several seconds for inital page load.

Create an acccount, or sign into the example account with the following credentials: 

Email: user@example.com

Password: password

## Usage

### Getting Started
To use Djello, first log in or create an account. 

### Boards
Everything in Djello is done inside of "boards". The first time you log in, you will be prompted to create a new board. Think of a board as encompassing an entire project that has its own team.

After you make a board,you will see a form that lets you create a list, and a menu on the right that lets you add members to this board's team.

### Lists
Lists represent one big chunk of the current project. Create a list, and you will see that you can add cards to it. 

### Cards
Each card is a small task that needs to be completed. Clicking on a card shows a detailed view with the cards description, a list of its members, and options to edit the card, add members, or mark the card as completed.

### Members
Boards and cards have members. Members are other users who have special permissions. Members of a board can see all lists and cards, and can add their own lists and cards. If a member creates a card, he or she is automatically one of its members.

Members of a card can mark the card as complete, but cannot delete or edit it unless they are the creator of the card, or the creator of board.

## Installation

To run Djello locally, fork and clone this repo, and run "bundle install" in your command line.

Next, migrate the database by running "rake db:migrate".

Next, create the example users and example board by running "rake db:seed".

Finally, run "rails s". You are good to go!

