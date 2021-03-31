const sequelize = require("../database")
const {DataTypes} = require("sequelize")

const City = sequelize.define('cities', {
    city_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Region = sequelize.define('regions', {
    region_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Area = sequelize.define('areas', {
    area_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    crime: {type: DataTypes.INTEGER, allowNull: false},
    pollution: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Street = sequelize.define('streets', {
    street_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const HouseType = sequelize.define('house_types', {
    house_type_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const House = sequelize.define('houses', {
    house_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    house_num: {type: DataTypes.INTEGER, allowNull:false},
    house_year: {type: DataTypes.INTEGER, allowNull:false},
    floors_num: {type: DataTypes.INTEGER, allowNull:false}
})

const Advantage = sequelize.define('advantages', {
    advantage_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const HouseHasAdvantage = sequelize.define('house_has_advantages', {

})

const MetroStation = sequelize.define('metro_stations', {
    metro_station_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    line_color: {type: DataTypes.STRING, allowNull: false}
})

const HouseNearMetroStation = sequelize.define('house_near_metro_stations', {
    distance: {type: DataTypes.DOUBLE, allowNull: false}
})

const Flat = sequelize.define('flats', {
    flat_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    flat_floor: {type: DataTypes.INTEGER, allowNull: false},
    square_all: {type: DataTypes.INTEGER, allowNull: false},
    square_living: {type: DataTypes.INTEGER, allowNull: false},
    price_month: {type: DataTypes.INTEGER, allowNull: false},
    rooms_num: {type: DataTypes.INTEGER, allowNull: false},
    balconies_num: {type: DataTypes.INTEGER, allowNull: false},
    short_description: {type: DataTypes.STRING, allowNull: false},
    main_description: {type: DataTypes.STRING, allowNull: false},
    commission: {type: DataTypes.STRING, allowNull: false}
})

const RentType = sequelize.define('rent_types', {
    rent_type_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasRentType = sequelize.define('flat_has_rent_types', {

})

const FlatElements = sequelize.define('flat_elements', {
    flat_element_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasElement = sequelize.define('flat_has_elements', {

})

// change type for image
const FlatImage = sequelize.define('flat_images', {
    image_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    image: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasImage = sequelize.define('flat_has_images', {

})

const Role = sequelize.define('roles', {
    role_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING,unique: true, allowNull: false}
})

const User = sequelize.define('users', {
    user_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birth: {type: DataTypes.DATE, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phone_num1: {type: DataTypes.STRING, allowNull: false},
    phone_num2: {type: DataTypes.STRING, allowNull: true},
    phone_num3: {type: DataTypes.STRING, allowNull: true},
    passport_ID: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
})

const Admin = sequelize.define('admins', {
})

const Client = sequelize.define('clients', {
})

const Owner = sequelize.define('owners', {
})

const BadHabit = sequelize.define('bad_habits', {
    bad_habit_id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const ClientHasBadHabit = sequelize.define('client_has_bad_habits', {

})

const ClientLikedFlat = sequelize.define('client_liked_flats', {

})

const OwnerHasFlat = sequelize.define('owner_has_flats', {

})

// city - metro_station
City.hasMany(MetroStation);
MetroStation.belongsTo(City);

// city - region
City.hasMany(Region);
Region.belongsTo(City);

// region - area
Region.hasMany(Area);
Area.belongsTo(Region);

// area - street
Area.hasMany(Street);
Street.belongsTo(Area);

// street- house
Street.hasMany(House);
House.belongsTo(Street);

// house -> {house_advantage} <- advantage
House.belongsToMany(Advantage, {through: HouseHasAdvantage})
Advantage.belongsToMany(House, {through: HouseHasAdvantage})

// house - type
HouseType.hasMany(House);
House.belongsTo(HouseType);

// house -> {house_near_metro_station} <- metro_station
House.belongsToMany(MetroStation, {through: HouseNearMetroStation}); // belongsTo
MetroStation.belongsToMany(House, {through: HouseNearMetroStation});

// house - flat
House.hasMany(Flat);
Flat.belongsTo(House);

// Flat -> {flat_has_rent_type} <- RentType
Flat.belongsToMany(RentType, {through: FlatHasRentType});
RentType.belongsToMany(Flat, {through: FlatHasRentType});

// flat -> {flat_has_elements} <- elements
Flat.belongsToMany(FlatElements, {through: FlatHasElement});
FlatElements.belongsToMany(Flat, {through: FlatHasElement});

// flat -> {flat_has_images} <- images
Flat.belongsToMany(FlatImage, {through: FlatHasImage});
FlatImage.belongsToMany(Flat, {through: FlatHasImage});

// owner - flat
Owner.belongsToMany(Flat, {through: OwnerHasFlat});
Flat.belongsToMany(Owner, {through: OwnerHasFlat});

// client liked flat
Client.belongsToMany(Flat, {through: ClientLikedFlat});
Flat.belongsToMany(Client, {through: ClientLikedFlat});

// role - user
Role.hasMany(User);
User.belongsTo(Role);

// user - owner
User.hasMany(Owner);
Owner.belongsTo(User);

// user - admin
User.hasMany(Admin);
Admin.belongsTo(User);

// user - client
User.hasMany(Client);
Client.belongsTo(User);

// client -> {client_has_bad_habit} <- bad_habit
Client.belongsToMany(BadHabit, {through: ClientHasBadHabit});
BadHabit.belongsToMany(Client, {through: ClientHasBadHabit});

module.exports = {
    Admin,
    Advantage,
    Area,
    BadHabit,
    City,
    Client,
    ClientHasBadHabit,
    ClientLikedFlat,
    Flat,
    FlatElements,
    FlatHasElement,
    FlatHasImage,
    FlatHasRentType,
    FlatImage,
    House,
    HouseHasAdvantage,
    HouseNearMetroStation,
    HouseType,
    MetroStation,
    Owner,
    OwnerHasFlat,
    Region,
    RentType,
    Role,
    Street,
    User
}