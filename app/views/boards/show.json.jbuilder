json.id @board.id
json.title @board.title
json.description @board.description

json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.position list.position

  json.cards list.cards do |card|
    json.id card.id
    json.title card.title
    json.description card.description
    json.position card.position
    json.complete card.complete
    json.list do 
      json.id list.id
      json.title list.title
    end
  end
end