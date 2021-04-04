create table cities
(
    city_id   int auto_increment
        primary key,
    name      varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table regions
(
    region_id  int auto_increment
        primary key,
    name       varchar(255) not null,
    createdAt  datetime     not null,
    updatedAt  datetime     not null,
    cityCityId int null,
    constraint regions_ibfk_1
        foreign key (cityCityId) references cities (city_id)
            on update cascade on delete set null
);

create
index cityCityId
    on regions (cityCityId);

create table areas
(
    area_id        int auto_increment
        primary key,
    crime          int          not null,
    pollution      int          not null,
    name           varchar(255) not null,
    createdAt      datetime     not null,
    updatedAt      datetime     not null,
    regionRegionId int null,
    constraint areas_ibfk_1
        foreign key (regionRegionId) references regions (region_id)
            on update cascade on delete set null
);

create
index regionRegionId
    on areas (regionRegionId);

create table streets
(
    street_id  int auto_increment
        primary key,
    name       varchar(255) not null,
    createdAt  datetime     not null,
    updatedAt  datetime     not null,
    areaAreaId int null,
    constraint streets_ibfk_1
        foreign key (areaAreaId) references areas (area_id)
            on update cascade on delete set null
);

create
index areaAreaId
    on streets (areaAreaId);

create table house_types
(
    house_type_id int auto_increment
        primary key,
    name          varchar(255) not null,
    createdAt     datetime     not null,
    updatedAt     datetime     not null
);

create table houses
(
    house_id             int auto_increment
        primary key,
    house_num            varchar(8) not null,
    house_year           int        not null,
    floors_num           int        not null,
    createdAt            datetime   not null,
    updatedAt            datetime   not null,
    streetStreetId       int null,
    houseTypeHouseTypeId int null,
    constraint houses_ibfk_1
        foreign key (streetStreetId) references streets (street_id)
            on update cascade on delete set null,
    constraint houses_ibfk_2
        foreign key (houseTypeHouseTypeId) references house_types (house_type_id)
            on update cascade on delete set null
);

create
index houseTypeHouseTypeId
    on houses (houseTypeHouseTypeId);

create
index streetStreetId
    on houses (streetStreetId);

create table advantages
(
    advantage_id int auto_increment
        primary key,
    name         varchar(255) not null,
    createdAt    datetime     not null,
    updatedAt    datetime     not null
);

create table house_has_advantages
(
    createdAt            datetime not null,
    updatedAt            datetime not null,
    houseHouseId         int      not null,
    advantageAdvantageId int      not null,
    primary key (houseHouseId, advantageAdvantageId),
    constraint house_has_advantages_ibfk_1
        foreign key (houseHouseId) references houses (house_id)
            on update cascade on delete cascade,
    constraint house_has_advantages_ibfk_2
        foreign key (advantageAdvantageId) references advantages (advantage_id)
            on update cascade on delete cascade
);

create
index advantageAdvantageId
    on house_has_advantages (advantageAdvantageId);

create table metro_station
(
    metro_station_id int auto_increment
        primary key,
    city_id          int         not null,
    name             int null,
    line_color       varchar(32) not null,
    constraint fk_city_metro
        foreign key (city_id) references city (city_id)
            on update cascade
);

create table house_near_metro_stations
(
    distance                   double   not null,
    createdAt                  datetime not null,
    updatedAt                  datetime not null,
    houseHouseId               int      not null,
    metroStationMetroStationId int      not null,
    primary key (houseHouseId, metroStationMetroStationId),
    constraint house_near_metro_stations_ibfk_1
        foreign key (houseHouseId) references houses (house_id)
            on update cascade on delete cascade,
    constraint house_near_metro_stations_ibfk_2
        foreign key (metroStationMetroStationId) references metro_stations (metro_station_id)
            on update cascade on delete cascade
);

create
index metroStationMetroStationId
    on house_near_metro_stations (metroStationMetroStationId);

create table flats
(
    flat_id           int auto_increment
        primary key,
    flat_floor        int          not null,
    square_all        int          not null,
    square_living     int          not null,
    price_month       int          not null,
    rooms_num         int          not null,
    balconies_num     int          not null,
    short_description varchar(255) not null,
    main_description  varchar(255) not null,
    pledge            int          not null,
    createdAt         datetime     not null,
    updatedAt         datetime     not null,
    houseHouseId      int null,
    constraint flats_ibfk_1
        foreign key (houseHouseId) references houses (house_id)
            on update cascade on delete set null
);

create
index houseHouseId
    on flats (houseHouseId);

create table rent_types
(
    rent_type_id int auto_increment
        primary key,
    name         varchar(255) not null,
    createdAt    datetime     not null,
    updatedAt    datetime     not null
);

create table flat_has_rent_types
(
    createdAt          datetime not null,
    updatedAt          datetime not null,
    flatFlatId         int      not null,
    rentTypeRentTypeId int      not null,
    primary key (flatFlatId, rentTypeRentTypeId),
    constraint flat_has_rent_types_ibfk_1
        foreign key (flatFlatId) references flats (flat_id)
            on update cascade on delete cascade,
    constraint flat_has_rent_types_ibfk_2
        foreign key (rentTypeRentTypeId) references rent_types (rent_type_id)
            on update cascade on delete cascade
);

create
index rentTypeRentTypeId
    on flat_has_rent_types (rentTypeRentTypeId);

create table flat_elements
(
    flat_element_id int auto_increment
        primary key,
    name            varchar(255) not null,
    createdAt       datetime     not null,
    updatedAt       datetime     not null
);

create table flat_has_elements
(
    createdAt                datetime not null,
    updatedAt                datetime not null,
    flatFlatId               int      not null,
    flatElementFlatElementId int      not null,
    primary key (flatFlatId, flatElementFlatElementId),
    constraint flat_has_elements_ibfk_1
        foreign key (flatFlatId) references flats (flat_id)
            on update cascade on delete cascade,
    constraint flat_has_elements_ibfk_2
        foreign key (flatElementFlatElementId) references flat_elements (flat_element_id)
            on update cascade on delete cascade
);

create
index flatElementFlatElementId
    on flat_has_elements (flatElementFlatElementId);

create table flat_images
(
    image_id  int auto_increment
        primary key,
    image     varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table flat_has_images
(
    createdAt        datetime not null,
    updatedAt        datetime not null,
    flatFlatId       int      not null,
    flatImageImageId int      not null,
    primary key (flatFlatId, flatImageImageId),
    constraint flat_has_images_ibfk_1
        foreign key (flatFlatId) references flats (flat_id)
            on update cascade on delete cascade,
    constraint flat_has_images_ibfk_2
        foreign key (flatImageImageId) references flat_images (image_id)
            on update cascade on delete cascade
);

create
index flatImageImageId
    on flat_has_images (flatImageImageId);

create table roles
(
    role_id   int auto_increment
        primary key,
    name      varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table users
(
    user_id     int auto_increment
        primary key,
    first_name  varchar(255) not null,
    second_name varchar(255) not null,
    birth       datetime     not null,
    gender      varchar(255) not null,
    email       varchar(255) not null,
    password    varchar(255) not null,
    phone_num1  varchar(255) not null,
    phone_num2  varchar(255) null,
    phone_num3  varchar(255) null,
    passport_ID varchar(255) not null,
    last_name   varchar(255) not null,
    createdAt   datetime     not null,
    updatedAt   datetime     not null,
    roleRoleId  int null,
    constraint users_ibfk_1
        foreign key (roleRoleId) references roles (role_id)
            on update cascade on delete set null
);

create
index roleRoleId
    on users (roleRoleId);

create table admins
(
    id         int auto_increment
        primary key,
    createdAt  datetime not null,
    updatedAt  datetime not null,
    userUserId int null,
    constraint admins_ibfk_1
        foreign key (userUserId) references users (user_id)
            on update cascade on delete set null
);

create
index userUserId
    on admins (userUserId);

create table clients
(
    id         int auto_increment
        primary key,
    createdAt  datetime not null,
    updatedAt  datetime not null,
    userUserId int null,
    constraint clients_ibfk_1
        foreign key (userUserId) references users (user_id)
            on update cascade on delete set null
);

create
index userUserId
    on clients (userUserId);


create table owners
(
    id         int auto_increment
        primary key,
    createdAt  datetime not null,
    updatedAt  datetime not null,
    userUserId int null,
    constraint owners_ibfk_1
        foreign key (userUserId) references users (user_id)
            on update cascade on delete set null
);

create
index userUserId
    on owners (userUserId);

create table bad_habits
(
    bad_habit_id int auto_increment
        primary key,
    name         varchar(255) not null,
    createdAt    datetime     not null,
    updatedAt    datetime     not null
);

create table client_has_bad_habits
(
    createdAt          datetime not null,
    updatedAt          datetime not null,
    clientId           int      not null,
    badHabitBadHabitId int      not null,
    primary key (clientId, badHabitBadHabitId),
    constraint client_has_bad_habits_ibfk_1
        foreign key (clientId) references clients (id)
            on update cascade on delete cascade,
    constraint client_has_bad_habits_ibfk_2
        foreign key (badHabitBadHabitId) references bad_habits (bad_habit_id)
            on update cascade on delete cascade
);

create
index badHabitBadHabitId
    on client_has_bad_habits (badHabitBadHabitId);

create table client_liked_flats
(
    createdAt  datetime not null,
    updatedAt  datetime not null,
    clientId   int      not null,
    flatFlatId int      not null,
    primary key (clientId, flatFlatId),
    constraint client_liked_flats_ibfk_1
        foreign key (clientId) references clients (id)
            on update cascade on delete cascade,
    constraint client_liked_flats_ibfk_2
        foreign key (flatFlatId) references flats (flat_id)
            on update cascade on delete cascade
);

create
index flatFlatId
    on client_liked_flats (flatFlatId);

create table owner_has_flats
(
    createdAt  datetime not null,
    updatedAt  datetime not null,
    ownerId    int      not null,
    flatFlatId int      not null,
    primary key (ownerId, flatFlatId),
    constraint owner_has_flats_ibfk_1
        foreign key (ownerId) references owners (id)
            on update cascade on delete cascade,
    constraint owner_has_flats_ibfk_2
        foreign key (flatFlatId) references flats (flat_id)
            on update cascade on delete cascade
);

create
index flatFlatId
    on owner_has_flats (flatFlatId);
