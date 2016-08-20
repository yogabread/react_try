class Group < ActiveRecord::Base
  has_many :users
  has_many :users_groups
  has_many :users, through: :users_groups
  belongs_to :founder, class_name: User, foreign_key: :founder_id
  validates :group_name, presence: true

  def self.text_search(query)
    if query.present?
      where("group_name @@ :q or group_description @@ :q", q: query)
    end
  end

end
