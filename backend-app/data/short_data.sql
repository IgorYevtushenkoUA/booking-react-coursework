 -- --1 into cities
 insert into cities(name, createdAt, updatedAt)
 values ('Київ', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 --
 -- --2 into region
 insert into regions(name, createdAt, updatedAt, cityId)
 values ('Київська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 --
 -- --3 into area
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Голосiївський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Дарницький', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Деснянський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Днiпровський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Оболонський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Печерський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Подiльський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Святошинський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Соломянський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into areas(crime, pollution, name, createdAt, updatedAt, regionId)
 values (1, 1, 'Шевченківський', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);

 -- into
 -- Голосіївський район вулиці
insert into streets(name, createdAt, updatedAt, areaId)
values ('Амурська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Антоновича', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Армійська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
-- -- вулиці Дарницького району
insert into streets(name, createdAt, updatedAt, areaId)
values ('Автопаркова', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 2);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Анни Ахматової', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 2);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Батуринська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 2);
--
-- -- Вулиці Деснянського району
insert into streets(name, createdAt, updatedAt, areaId)
values ('Метеюка', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 3);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Биківнянська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 3);
--
-- -- Вулиці Днiпровський району
insert into streets(name, createdAt, updatedAt, areaId)
values ('Азербайджанська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 4);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Алматинська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 4);
insert into streets(name, createdAt, updatedAt, areaId)
values ('Івана Багряного', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 4);
--
 -- -- Вулиці Оболонського району
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Абрикосова', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 5);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Агрегатна', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 5);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Аркасівська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 5);
 --
 -- -- Вулиці Печерський району
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Арсенальна', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 6);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Банкова', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 6);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Баришівська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 6);
 --
 -- -- Вулиці Подiльський району
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Ананасна', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 7);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Андріївська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 7);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Баклажанна', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 7);
 --
 -- -- Вулиці Святошинський району
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Астрономічна', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 8);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Бахмацька', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 8);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Бетховена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 8);
 --
 -- -- Вулиці Солом\'янський району
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Богдановська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 9);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Агітаторська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 9);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Архітекторська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 9);
 --
 -- -- Вулиці Шевченківський району
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Бакинська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 10);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Перемоги', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 10);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Гоголівська', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 10);
 insert into streets(name, createdAt, updatedAt, areaId)
 values ('Мельникова', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 10);
 --
 -- wall type
 insert into wall_types(name, createdAt, updatedAt)
 values ('цегляний', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into wall_types(name, createdAt, updatedAt)
 values ('панельний', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into wall_types(name, createdAt, updatedAt)
 values ('моноліт', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into wall_types(name, createdAt, updatedAt)
 values ('шлакоблок', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into wall_types(name, createdAt, updatedAt)
 values ('цегляний\'яний', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into wall_types(name, createdAt, updatedAt)
 values ('газоблок', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into wall_types(name, createdAt, updatedAt)
 values ('СИП панель', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

-- heatings
insert into heatings (name, createdAt, updatedAt) values('Централізоване', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into heatings (name, createdAt, updatedAt) values('Власна котельня', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into heatings (name, createdAt, updatedAt) values('Індивідуальне газове', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into heatings (name, createdAt, updatedAt) values('Індивідуальне електро', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into heatings (name, createdAt, updatedAt) values('Твердопаливне', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into heatings (name, createdAt, updatedAt) values('Комбіноване', '2021-03-31 20:47:23', '2021-03-31 20:47:23')

 -- -- houses
 insert into houses(house_num, house_year, floors_num, createdAt, updatedAt, streetId, wallTypeId, heatingId)
 values (37, 2, 20, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 27, 1, 1);
 insert into houses(house_num, house_year, floors_num, createdAt, updatedAt, streetId, wallTypeId, heatingId)
 values (5, 3, 11, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 28, 1, 1);
 insert into houses(house_num, house_year, floors_num, createdAt, updatedAt, streetId, wallTypeId, heatingId)
 values (7, 8, 16, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 29, 1, 1);
 insert into houses(house_num, house_year, floors_num, createdAt, updatedAt, streetId, wallTypeId, heatingId)
 values (44, 12, 12, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 30, 1, 1);
 insert into houses(house_num, house_year, floors_num, createdAt, updatedAt, streetId, wallTypeId, heatingId)
 values (1, 10, 10, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 7, 1, 1);
 insert into houses(house_num, house_year, floors_num, createdAt, updatedAt, streetId, wallTypeId, heatingId)
 values (3, 2, 25, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 24, 1, 1);
 -- -- insert into houses(house_num, house_year,  floors_num, createdAt, updatedAt) values(1,10,10,'2021-03-31 20:47:23','2021-03-31 20:47:23');

insert into infrastructures (name, createdAt, updatedAt) values('Дитячий садок', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Школа', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Бювет', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Зупинка транспорту', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Метро', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Ринок', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Супермаркет, ТРЦ', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Парк', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Озеро', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Дитячий майданчик', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Аптека', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Лакарня, поліклінка', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Центр міста', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Ресторан, кафе', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Кінотеатр', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Театр', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Відділення пошти', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Відділення банку', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Автовокзал', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Залізнична станція', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Спортзал', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Спортивний майданчик', '2021-03-31 20:47:23', '2021-03-31 20:47:23')
insert into infrastructures (name, createdAt, updatedAt) values('Університет', '2021-03-31 20:47:23', '2021-03-31 20:47:23')

-- house_has_infrastructures
insert into house_has_infrastructures(houseId, infrastructureId,createdAt, updatedAt) values (1,1, '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into house_has_infrastructures(houseId, infrastructureId,createdAt, updatedAt) values (1,2, '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into house_has_infrastructures(houseId, infrastructureId,createdAt, updatedAt) values (1,3, '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into house_has_infrastructures(houseId, infrastructureId,createdAt, updatedAt) values (1,4, '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into house_has_infrastructures(houseId, infrastructureId,createdAt, updatedAt) values (1,5, '2021-03-31 20:47:23', '2021-03-31 20:47:23');

 -- metro_station
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Червоний Хутір', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Бориспільська', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Вирлиця', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Харківська', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Позняки', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Осокорки', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Славутич', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Видубичі', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Дружби народів', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Печерська', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Кловська', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Палац спорту', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Театральна', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Лук''янівська', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Дорогожичі', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Сирець', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Теремки', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Іподром', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Виставковий центр', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Васильківська', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Голосійвська', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Деміївська', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Либідська', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Палац ''України''', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Олімпійська', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Площа Льва Толстого', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Хрещатик', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Поштова площа', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Контрактова площа', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Тараса Шевченка', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Почайна', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Оболонь', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Мінська', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Героїв Дніпра', 'синя', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Лісова', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Чернігівська', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Дарниця', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Лівобережна', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Гідропарк', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Дніпро', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Арсенальна', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Хрещатик', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Театральна', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Університет', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Вокзальна', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Політехнічний інститут', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Шулявська', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Берестейська', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Нивки', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Святощин', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Житомирська', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Академмістечко', 'червона', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 insert into metro_stations(name, line_color, createdAt, updatedAt, cityId)
 values ('Золоті Ворота', 'зелена', '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1);
 --

 -- -- house_near_metro_stations
 insert into house_near_metro_stations(distance, createdAt, updatedAt, houseId, metroStationId)
 values (1, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 1, 15);
 insert into house_near_metro_stations(distance, createdAt, updatedAt, houseId, metroStationId)
 values (1, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 44);
 insert into house_near_metro_stations(distance, createdAt, updatedAt, houseId, metroStationId)
 values (1, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 3, 53);
 insert into house_near_metro_stations(distance, createdAt, updatedAt, houseId, metroStationId)
 values (1, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 4, 14);
 insert into house_near_metro_stations(distance, createdAt, updatedAt, houseId, metroStationId)
 values (1, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 5, 35);
 insert into house_near_metro_stations(distance, createdAt, updatedAt, houseId, metroStationId)
 values (1, '2021-03-31 20:47:23', '2021-03-31 20:47:23', 6, 45);

 insert into bathroom_types(name, createdAt, updatedAt) values ('Роздільний', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into bathroom_types(name, createdAt, updatedAt) values ('Суміжний', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into bathroom_types(name, createdAt, updatedAt) values ('2 і більше', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into bathroom_types(name, createdAt, updatedAt) values ('Санвузол відсутній', '2021-03-31 20:47:23', '2021-03-31 20:47:23');


 -- -- flats
 -- -- 1
 insert into flats(flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description,
                   main_description, pledge, createdAt, updatedAt, houseId, bathroomTypeId)
 values (5, 62, 20, 15900, 1, 1, 'short_description', 'main_description', 20000, '2021-03-31 20:47:23',
         '2021-03-31 20:47:23', 1, 1);
 -- -- 2
 insert into flats(flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description,
                   main_description, pledge, createdAt, updatedAt, houseId,bathroomTypeId)
 values (4, 68, 20, 17500, 1, 1, 'short_description', 'main_description', 20000, '2021-03-31 20:47:23',
         '2021-03-31 20:47:23', 2,1);
 -- -- 3
 insert into flats(flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description,
                   main_description, pledge, createdAt, updatedAt, houseId,bathroomTypeId)
 values (3, 110, 52, 50000, 3, 2, 'short_description', 'main_description', 50000, '2021-03-31 20:47:23',
         '2021-03-31 20:47:23', 3,1);
 -- -- 4
 insert into flats(flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description,
                   main_description, pledge, createdAt, updatedAt, houseId,bathroomTypeId)
 values (6, 110, 74, 43000, 3, 2, 'short_description', 'main_description', 0, '2021-03-31 20:47:23',
         '2021-03-31 20:47:23', 4,1);
 -- -- 5
 insert into flats(flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description,
                   main_description, pledge, createdAt, updatedAt, houseId,bathroomTypeId)
 values (8, 40, 28, 7500, 1, 1, 'short_description', 'main_description', 20000, '2021-03-31 20:47:23',
         '2021-03-31 20:47:23', 5,1);
 -- -- 6
 insert into flats(flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description,
                   main_description, pledge, createdAt, updatedAt, houseId,bathroomTypeId)
 values (10, 47, 22, 18500, 1, 2, 'short_description', 'main_description', 20000, '2021-03-31 20:47:23',
         '2021-03-31 20:47:23', 6,1);

 -- -- rent_types
 insert into rent_types(name, createdAt, updatedAt)
 values ('місячна', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into rent_types(name, createdAt, updatedAt)
 values ('денна', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

  -- flat_has_rent_types
 insert into flat_has_rent_types(createdAt, updatedAt, flatId, rentTypeId)
 values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 1, 1);
 insert into flat_has_rent_types(createdAt, updatedAt, flatId, rentTypeId)
 values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 1);
 insert into flat_has_rent_types(createdAt, updatedAt, flatId, rentTypeId)
 values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 3, 1);
 insert into flat_has_rent_types(createdAt, updatedAt, flatId, rentTypeId)
 values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 4, 1);
 insert into flat_has_rent_types(createdAt, updatedAt, flatId, rentTypeId)
 values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 5, 1);
 insert into flat_has_rent_types(createdAt, updatedAt, flatId, rentTypeId)
 values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 6, 1);

insert into household_appliances(name, createdAt, updatedAt) values ('Електрочайник', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('кавомашина', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Фен', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Плита', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Варильна панель', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Духова шафа', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Мікрохвильова піч', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Мультиварка', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Холодильние', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Морозильна камера', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Посудомийна машина', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Пральна машина', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Сушильна машина', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Праска', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into household_appliances(name, createdAt, updatedAt) values ('Пилосос', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
--
insert into flat_has_household_appliances(flatId, householdApplianceId, createdAt, updatedAt) values(1,1, '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_household_appliances(flatId, householdApplianceId, createdAt, updatedAt) values(1,2, '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_household_appliances(flatId, householdApplianceId, createdAt, updatedAt) values(1,3, '2021-03-31 20:47:23', '2021-03-31 20:47:23');

insert into multimedias(name, createdAt, updatedAt) values ('WI-FI', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into multimedias(name, createdAt, updatedAt) values ('Швидкісний інтернет', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into multimedias(name, createdAt, updatedAt) values ('Телевізор', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into multimedias(name, createdAt, updatedAt) values ('PlayStation', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into multimedias(name, createdAt, updatedAt) values ('Кабельне, цифрове ТБ', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into multimedias(name, createdAt, updatedAt) values ('Супутникове ТБ', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into multimedias(name, createdAt, updatedAt) values ('Проектор', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

insert into flat_has_multimedias(flatId, multimediaId,createdAt, updatedAt) values(1,1,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_multimedias(flatId, multimediaId,createdAt, updatedAt) values(1,2,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_multimedias(flatId, multimediaId,createdAt, updatedAt) values(1,3,'2021-03-31 20:47:23', '2021-03-31 20:47:23');

insert into comforts(name, createdAt, updatedAt) values ('Кондиціонер', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Підігрів полу', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Ванна', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Душова кабінка', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Меблі', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Гардероб', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Лоджія', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Тераса', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Тераса', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Панорамні вікна', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Грати на вікнах', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Сигналізація', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Пожежна сигналізація', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Відоспостереження', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Конс\'єрж', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Охорона території', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Паркувальне місце', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Гостьовий паркінг', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Підземний паркунг', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Гараж', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Ліфт', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Грузовий ліфт', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Технологія \'розумний будинок\'', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into comforts(name, createdAt, updatedAt) values ('Автономний електрогенератор', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

insert into flat_has_comforts(flatId, comfortId,createdAt, updatedAt) values(1,1,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
--
insert into people_types(name, createdAt, updatedAt) values ('Тільки дівчина', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into people_types(name, createdAt, updatedAt) values ('Тільки хлопець', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into people_types(name, createdAt, updatedAt) values ('Тільки сім\'я', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into people_types(name, createdAt, updatedAt) values ('Можна студентам', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into people_types(name, createdAt, updatedAt) values ('Можна іноземцям', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into people_types(name, createdAt, updatedAt) values ('Можна з дітьми', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

insert into flat_has_people_types(flatId, peopleTypeId, createdAt, updatedAt) values(1,1,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_people_types(flatId, peopleTypeId, createdAt, updatedAt) values(1,2,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_people_types(flatId, peopleTypeId, createdAt, updatedAt) values(1,3,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into flat_has_people_types(flatId, peopleTypeId, createdAt, updatedAt) values(1,4,'2021-03-31 20:47:23', '2021-03-31 20:47:23');
--
insert into rules(name, createdAt, updatedAt) values ('Курити не можна', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into rules(name, createdAt, updatedAt) values ('Тварин не можна', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
insert into rules(name, createdAt, updatedAt) values ('Не можжна проводити заходи(вечірки)', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

insert into flat_has_rules(flatId, ruleId, createdAt, updatedAt) values(1,1, '2021-03-31 20:47:23', '2021-03-31 20:47:23');

-- -- -- roles
 insert into roles(name, createdAt, updatedAt)
 values ('admin', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into roles(name, createdAt, updatedAt)
 values ('owner', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into roles(name, createdAt, updatedAt)
 values ('client', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
--
  -- accounts
  -- 1 admin
 insert into accounts(first_name, second_name, last_name, birth, gender, email, password, phone_num1,
                  createdAt, updatedAt, roleId)
 values ('admin', 'admin', 'admin', '1990-03-31', 'm', 'email@gmail.com', 'password', '111-11-11',
        '2021-05-03 23:05:18', '2021-05-03 23:05:18', 1);
 -- -- 2 owner
 insert into accounts(first_name, second_name, last_name, birth, gender, email, password, phone_num1, phone_num2,
                   createdAt, updatedAt, roleId)
 values ('owner', 'owner', 'owner', '1990-03-31', 'm', 'email@gmail.com', 'password', '222-22-21', '222-22-22',
         '2021-05-03 23:05:18', '2021-05-03 23:05:18', 2);
 --
 -- -- 3 client
 insert into accounts(first_name, second_name, last_name, birth, gender, email, password, phone_num1, phone_num2,
                  createdAt, updatedAt, roleId)
 values ('client', 'client', 'client', '1990-03-31', 'm', 'email@gmail.com', 'password', '333-33-31', '333-33-32',
        '2021-05-03 23:05:18', '2021-05-03 23:05:18', 3);

 -- -- bad_habits
 insert into bad_habits(name, createdAt, updatedAt)
 values ('Куріння', '2021-03-31 20:47:23', '2021-03-31 20:47:23');
 insert into bad_habits(name, createdAt, updatedAt)
 values ('Алкоголь', '2021-03-31 20:47:23', '2021-03-31 20:47:23');

--
  client_has_bad_habits
  insert into client_has_bad_habits(createdAt, updatedAt, accountId, badHabitId) values('2021-03-31 20:47:23', '2021-03-31 20:47:23', 1,1);


  client_liked_flats
  insert into client_liked_flats(createdAt, updatedAt, accountId, flatId) values('2021-03-31 20:47:23', '2021-03-31 20:47:23',1,1);

 -- owner_has_flats
insert into owner_has_flats(createdAt, updatedAt, accountId, flatId)
values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 1);
insert into owner_has_flats(createdAt, updatedAt, accountId, flatId)
values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 2);
insert into owner_has_flats(createdAt, updatedAt, accountId, flatId)
values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 3);
insert into owner_has_flats(createdAt, updatedAt, accountId, flatId)
values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 4);
insert into owner_has_flats(createdAt, updatedAt, accountId, flatId)
values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 5);
insert into owner_has_flats(createdAt, updatedAt, accountId, flatId)
values ('2021-03-31 20:47:23', '2021-03-31 20:47:23', 2, 6);

