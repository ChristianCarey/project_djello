json.id @board.id
json.title @board.title
json.description @board.description
json.user_id @board.user_id

json.user do 
  json.first_name @board.user.first_name
  json.last_name @board.user.last_name
end

json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.position list.position
  json.user_id list.user_id

  json.cards list.cards do |card|
    json.id card.id
    json.title card.title
    json.description card.description
    json.position card.position
    json.complete card.complete
    json.user_id card.user_id

    json.members card.members do |member|
      json.id member.id
    end
    
    json.list do 
      json.id list.id
      json.title list.title
    end
  end
end