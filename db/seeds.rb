puts "Destroying everything..."

Board.destroy_all
User.destroy_all

puts "Creating users..."

user = User.create(
  first_name: 'Example',
  last_name:  'User',
  email:      'user@example.com',
  password:   'password'
)

other_user = User.create(
  first_name: 'Other',
  last_name:  'User',
  email:      'otheruser@example.com',
  password:   'password'
)

9.times do 
  first_name = Faker::Name.first_name
  User.create(
    first_name: first_name,
    last_name:  Faker::Name.last_name,
    email:      Faker::Internet.email(first_name),
    password:   'password'
  )
end

puts "User created, log in with user@example.com, and password: password"
puts "Creating example board"

board = Board.create(
  title: "This is a board - Add some lists", 
  user_id: user.id
)

user.boards << board
other_user.boards << board

puts "5 boards created"

puts "adding example list to boards" 

list = board.lists.create(
  title: "A list of cards",
  user_id: user.user_id
)

puts "adding example cards"

list.cards.create(
  title: "This is card - click to see details",
  description: "Cards represent tasks that need to be completed. You can add members below to assign more users to a task.",
  user_id: user.id,
  position: 0
)

member_card = list.cards.create(
  title: "This card has another member.",
  description: "You and the other member can mark this card as complete.",
  user_id: user.id,
  position: 1
)

other_user.cards << member_card

list.cards.create(
  title: "This card is complete.",
  description: "If you no longer need this card on your list, delete by clicking the trash can in the upper-right corner.",
  complete: true,
  user_id: user.id,
  position: 2
  )

Card.all.each do |card|
  user.cards << card
end

puts "All done!"
