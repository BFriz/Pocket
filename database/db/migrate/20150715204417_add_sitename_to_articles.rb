class AddSitenameToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :site_name, :string
  end
end
