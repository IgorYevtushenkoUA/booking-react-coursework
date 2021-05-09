const sequelize = require("../database")
const {DataTypes} = require("sequelize")

const City = sequelize.define('cities', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Region = sequelize.define('regions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Area = sequelize.define('areas', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    crime: {type: DataTypes.INTEGER, allowNull: false},
    pollution: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Street = sequelize.define('streets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const WallType = sequelize.define('wall_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Heating = sequelize.define('heating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const House = sequelize.define('houses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    house_num: {type: DataTypes.STRING, allowNull: false},
    house_year: {type: DataTypes.INTEGER, allowNull: false},
    floors_num: {type: DataTypes.INTEGER, allowNull: false}
})
// infrastructure
const Infrastructure = sequelize.define('infrastructure', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const HouseHasInfrastructure = sequelize.define('house_has_infrastructure', {})

const MetroStation = sequelize.define('metro_stations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    line_color: {type: DataTypes.STRING, allowNull: false}
})

const HouseNearMetroStation = sequelize.define('house_near_metro_stations', {
    distance: {type: DataTypes.DOUBLE, allowNull: false}
})

// bathroom_types
const BathroomType = sequelize.define('bathroom_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Flat = sequelize.define('flats', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    flat_floor: {type: DataTypes.INTEGER, allowNull: false},
    square_all: {type: DataTypes.INTEGER, allowNull: false},
    square_living: {type: DataTypes.INTEGER, allowNull: false},
    price_month: {type: DataTypes.INTEGER, allowNull: false},
    rooms_num: {type: DataTypes.INTEGER, allowNull: false},
    balconies_num: {type: DataTypes.INTEGER, allowNull: false},
    short_description: {type: DataTypes.STRING, allowNull: false},
    main_description: {type: DataTypes.STRING, allowNull: false},
    pledge: {type: DataTypes.INTEGER, allowNull: false}
})

const RentType = sequelize.define('rent_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasRentType = sequelize.define('flat_has_rent_types', {})


// household_appliances
const HouseholdAppliances = sequelize.define('household_appliances', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const FlatHasHouseholdAppliances = sequelize.define('flat_has_household_appliances', {})


// multimedias
const Multimedia = sequelize.define('multimedias', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasMultimedia = sequelize.define('flat_has_multimedias', {})


// comforts
const Comfort = sequelize.define('comforts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const FlatHasComfort = sequelize.define('flat_has_comforts', {})


// people_types
const PeopleType = sequelize.define('people_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const FlatHasPeopleType = sequelize.define('flat_has_people_types', {})


// rules
const Rule = sequelize.define('rules', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const FlatHasRule = sequelize.define('flat_has_rules', {})

// change type for image
const Image = sequelize.define('images', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FlatHasImage = sequelize.define('flat_has_images', {})

const Role = sequelize.define('roles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Account = sequelize.define('accounts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birth: {type: DataTypes.DATE, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phone_num1: {type: DataTypes.STRING, allowNull: false},
    phone_num2: {type: DataTypes.STRING, allowNull: true},
    phone_num3: {type: DataTypes.STRING, allowNull: true},
    last_name: {type: DataTypes.STRING, allowNull: false},
})

const BadHabit = sequelize.define('bad_habits', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const ClientHasBadHabit = sequelize.define('client_has_bad_habits', {})

const ClientLikedFlat = sequelize.define('client_liked_flats', {})

const ClientWatchedFlat = sequelize.define('client_has_seen_flat', {})

const OwnerHasFlat = sequelize.define('owner_has_flats', {})

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
House.belongsToMany(Infrastructure, {through: HouseHasInfrastructure})
Infrastructure.belongsToMany(House, {through: HouseHasInfrastructure})

// house - wall_type
WallType.hasMany(House);
House.belongsTo(WallType);

// house - heating
Heating.hasMany(House);
House.belongsTo(Heating);

// house -> {house_near_metro_station} <- metro_station
House.belongsToMany(MetroStation, {through: HouseNearMetroStation}); // belongsTo
MetroStation.belongsToMany(House, {through: HouseNearMetroStation});

// house - flat
House.hasMany(Flat);
Flat.belongsTo(House);

// bathroom_type - flat
BathroomType.hasMany(Flat);
Flat.belongsTo(BathroomType);

// Flat -> {flat_has_rent_type} <- RentType
Flat.belongsToMany(RentType, {through: FlatHasRentType});
RentType.belongsToMany(Flat, {through: FlatHasRentType});

// Flat -> {flat_has_rent_type} <- HouseholdAppliances
Flat.belongsToMany(HouseholdAppliances, {through: FlatHasHouseholdAppliances});
HouseholdAppliances.belongsToMany(Flat, {through: FlatHasHouseholdAppliances});

// Flat -> {flat_has_rent_type} <- Multimedia
Flat.belongsToMany(Multimedia, {through: FlatHasMultimedia});
Multimedia.belongsToMany(Flat, {through: FlatHasMultimedia});

// Flat -> {flat_has_rent_type} <- Comfort
Flat.belongsToMany(Comfort, {through: FlatHasComfort});
Comfort.belongsToMany(Flat, {through: FlatHasComfort});

// Flat -> {flat_has_rent_type} <- PeopleType
Flat.belongsToMany(PeopleType, {through: FlatHasPeopleType});
PeopleType.belongsToMany(Flat, {through: FlatHasPeopleType});

// Flat -> {flat_has_rent_type} <- Rule
Flat.belongsToMany(Rule, {through: FlatHasRule});
Rule.belongsToMany(Flat, {through: FlatHasRule});

// flat -> {flat_has_images} <- images
Flat.belongsToMany(Image, {through: FlatHasImage});
Image.belongsToMany(Flat, {through: FlatHasImage});

// owner - flat
Account.belongsToMany(Flat, {through: OwnerHasFlat});
Flat.belongsToMany(Account, {through: OwnerHasFlat});

// account liked flat
Account.belongsToMany(Flat, {through: ClientLikedFlat});
Flat.belongsToMany(Account, {through: ClientLikedFlat});

// account see flat
Account.belongsToMany(Flat, {through: ClientWatchedFlat});
Flat.belongsToMany(Account, {through: ClientWatchedFlat});

// role - account
Role.hasMany(Account);
Account.belongsTo(Role);

// account -> {client_has_bad_habit} <- bad_habit
Account.belongsToMany(BadHabit, {through: ClientHasBadHabit});
BadHabit.belongsToMany(Account, {through: ClientHasBadHabit});

module.exports = {
    City,
    Region,
    Area,
    Street,
    WallType,
    Heating,
    House,
    Infrastructure,
    HouseHasInfrastructure,
    MetroStation,
    HouseNearMetroStation,
    BathroomType,
    Flat,
    RentType,
    FlatHasRentType,
    HouseholdAppliances,
    FlatHasHouseholdAppliances,
    Multimedia,
    FlatHasMultimedia,
    Comfort,
    FlatHasComfort,
    PeopleType,
    FlatHasPeopleType,
    Rule,
    FlatHasRule,
    Image,
    FlatHasImage,
    Role,
    Account,
    BadHabit,
    ClientHasBadHabit,
    ClientLikedFlat,
    ClientWatchedFlat,
    OwnerHasFlat
}