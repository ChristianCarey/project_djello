puts "Destroying everything..."

Board.destroy_all
User.destroy_all

puts "Creating users..."

user = User.create(
  first_name: 'User',
  last_name:  'Userman',
  email:      'user@mail.com',
  password:   'password'
)

puts "User created, log in with user@mail.com, and password: password"
puts "Creating Boards"

5.times do |time|
  board = Board.create(
    title: Faker::StarWars.planet,
    description: Faker::StarWars.quote,
    user_id: User.first.id
  )
  User.first.boards << board
end

puts "5 boards created"

puts "adding lists to boards" 

Board.all.each do |board|

  4.times do |n|
    board.lists.create(
      user_id: user.id,
      title: Faker::Pokemon.location,
      description: Faker::ChuckNorris.fact,
      position: n
    )
  end
end

puts "lists added"

puts "adding cards to lists"

List.all.each do |list| 

  4.times do |n|
    list.cards.create(
      user_id: user.id,
      title: Faker::StarWars.vehicle,
      description: Faker::ChuckNorris.fact,
      position: n
    )
  end
end

puts "All done!"
