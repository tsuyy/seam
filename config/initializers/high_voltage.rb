HighVoltage.configure do |config|
  # Root path '/'
  # config.home_page = 'home'
  # Set top level routes '/features'
  config.route_drawer = HighVoltage::RouteDrawers::Root
  # Removed defult routes
  config.routes = false
end
