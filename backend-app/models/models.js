const sequelize = require("../database")
const {DataTypes} = require("sequelize")

const City = sequelize.define('city', {
    city_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Region = sequelize.define('region', {
    region_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Area = sequelize.define('area', {
    area_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    crime: {type: DataTypes.INT, allowNull: false},
    pollution: {type: DataTypes.INT, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Street = sequelize.define('street', {
    city_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const HouseType = sequelize.define('house_type', {
    house_type_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const House = sequelize.define('house', {
    house_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    house_num: {type: DataTypes.INT, allowNull:false},
    house_year: {type: DataTypes.INT, allowNull:false},
    floors_num: {type: DataTypes.INT, allowNull:false}
})

const Advantage = sequelize.define('advantage', {
    advantage_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const HouseAdvantage = sequelize.define('house_advantage', {

})

const MetroStation = sequelize.define('metro_station_id', {
    metro_station_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    line_color: {type: DataTypes.STRING, allowNull: false}
})

const HouseNearMetroStation = sequelize.define('house_near_metro_station', {
    distance: {type: DataTypes.DOUBLE, allowNull: false}
})

const Flat = sequelize.define('flat', {
    flat_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    flat_floor: {type: DataTypes.INT, allowNull: false},
    square_all: {type: DataTypes.INT, allowNull: false},
    square_living: {type: DataTypes.INT, allowNull: false},
    price_month: {type: DataTypes.INT, allowNull: false},
    rooms_num: {type: DataTypes.INT, allowNull: false},
    balconies_num: {type: DataTypes.INT, allowNull: false},
    short_description: {type: DataTypes.STRING, allowNull: false},
    main_description: {type: DataTypes.STRING, allowNull: false},
    commission: {type: DataTypes.STRING, allowNull: false}
})

const RentType = sequelize.define('rent_type', {
    rent_type_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasRentType = sequelize.define('flat_has_rent_type', {

})

const FlatElements = sequelize.define('flat_elements', {
    flat_element_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasElement = sequelize.define('flat_has_element', {

})

// change type for image
const FlatImage = sequelize.define('flat_image', {
    image_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    image: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasImage = sequelize.define('flat_has_image', {

})

const Role = sequelize.define('role', {
    role_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const User = sequelize.define('user', {
    user_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
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

const Admin = sequelize.define('admin', {
})

const Client = sequelize.define('client', {
})

const Owner = sequelize.define('owner', {
})

const BadHabit = sequelize.define('bad_habit', {
    bad_habit_id: {type: DataTypes.INT, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const ClientHasBadHabit = sequelize.define('client_has_bad_habit', {

})

const ClientLikedFlat = sequelize.define('client_liked_flat', {

})

const OwnerHasFlat = sequelize.define('city', {

})

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
House.belongsToMany(Advantage, {through: HouseAdvantage})
Advantage.belongsToMany(House, {through: HouseAdvantage})

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
    HouseAdvantage,
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