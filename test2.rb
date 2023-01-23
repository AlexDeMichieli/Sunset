require "yaml"

class UsersController < ActionController::Base
  def foo
    yaml_data = params[:key]
    object = YAML.load yaml_data
  end
end
