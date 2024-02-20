const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const NameDB = process.env.NAME_DB;
const UserName = process.env.USERNAME_DB;
const Password = process.env.PASSWORD_DB;
const Host = process.env.HOST;
const Dialect = process.env.DIALECT_DB;
const Port = process.env.PORT_DB;

const sequelize = new Sequelize(NameDB, UserName, Password, {
    host: Host,
    dialect: Dialect,
    port: Port,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    },
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connect success!!');
    })
    .catch((err) => {
        console.log(err);
    });

const Role = sequelize.define('Role', {
    RoleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    RoleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
});

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                msg: "Password must be between 6 and 12 characters"
            }
        }
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Please enter a valid email address"
            }
        }
    },
    Phone: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            is: {
                args: /^[0-9]+$/,
                msg: "Please enter a valid phone number"
            },
            len: {
                args: [10, 15],
                msg: "Please enter a valid phone number"
            },
        },
        defaultValue: null
    },
    Address: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    Avatar: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    RoleID: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references: {
            model: Role,
            key: 'RoleID'
        }
    }
});

const School = sequelize.define('School', {
    SchoolID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    SchoolName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Post = sequelize.define('Post', {
    PostID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    SchoolID: {
        type: DataTypes.INTEGER,
        references: {
            model: School,
            key: 'SchoolID'
        }
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Category = sequelize.define('Category', {
    CategoryID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    CategoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
});

const Product = sequelize.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    CategoryID: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'CategoryID'
        }
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ImageURL: {
        type: DataTypes.STRING,
        defaultValue: null
    }
});

const Donate = sequelize.define('Donate', {
    DonateID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    DonatorID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserID'
        }
    },
    SchoolID: {
        type: DataTypes.INTEGER,
        references: {
            model: School,
            key: 'SchoolID'
        }
    },
    Money: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

const Order = sequelize.define('Order', {
    OrderID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserID'
        }
    }
});

const OrderItem = sequelize.define('OrderItem', {
    OrderItemID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    OrderID: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'OrderID'
        }
    },
    ProductID: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'ProductID'
        }
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Price: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

const Discounts = sequelize.define('Discount', {
    DiscountsID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserID'
        }
    },
    DiscountPercent: {
        type: DataTypes.INTEGER,
        defaultValue: 20
    }
});

const AdImage = sequelize.define('AdImage', {
    AdImageID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ImageURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ImageName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.belongsTo(Role, {
    foreignKey: 'RoleID'
});

Role.hasMany(User, {
    foreignKey: 'RoleID'
});

Post.belongsTo(School, {
    foreignKey: 'SchoolID'
});

School.hasOne(Post, {
    foreignKey: 'SchoolID'
});

Product.belongsTo(Category, {
    foreignKey: 'CategoryID'
});

Category.hasMany(Product, {
    foreignKey: 'CategoryID'
});

Donate.belongsTo(User, {
    foreignKey: 'DonatorID'
});

User.hasMany(Donate, {
    foreignKey: 'DonatorID'
});

Donate.belongsTo(School, {
    foreignKey: 'SchoolID'
});

School.hasMany(Donate, {
    foreignKey: 'SchoolID'
});

Order.belongsTo(User, {
    foreignKey: 'UserID'
});

User.hasMany(Order, {
    foreignKey: 'UserID'
});

OrderItem.belongsTo(Order, {
    foreignKey: 'OrderID'
});

Order.hasOne(OrderItem, {
    foreignKey: 'OrderID'
});

OrderItem.belongsTo(Product, {
    foreignKey: 'ProductID'
});

Product.hasMany(OrderItem, {
    foreignKey: 'ProductID'
});

Discounts.belongsTo(User, {
    foreignKey: 'UserID'
});

User.hasOne(Discounts, {
    foreignKey: 'UserID'
});

// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Database synchronization success!");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

module.exports = {
    Role,
    User,
    School,
    Post,
    Category,
    Product,
    Donate,
    Order,
    OrderItem,
    Discounts,
    AdImage
};




