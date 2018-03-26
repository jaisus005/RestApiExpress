const expect =require('expect');
const reQuest=require('supertest');
const {app}= require('../app');

const {Employees}=require('../DataBase/Model');

const employees=[
    {
        userName: 'vishesh12',
        phoneNo: '1234567800',
        email: 'v@g.com'
    },
    {
        userName: 'vishesh13',
        phoneNo: '1234567888',
        email: 'v@g.com'
    }
];



beforeEach((done)=>{
   Employees.remove({}).then(()=> {
      return Employees.insertMany(employees)
   }).then(()=>done());
});
 describe('POST /employee.json',(done)=> {

     it('should create new employee',(done)=>{


     var data = {
         userName: 'vishesh',
         phoneNo: '1234567890',
         email: 'v@g.com'
     }


     reQuest(app)
         .post('/employee.json')
         .send(data)
         .expect(200)
         .expect((res) => {
             expect(res.body.result.userName).toBe(data.userName)
         })
                 .end((err, res) => {
                     if (err) {
                         return done(err);
                     }

                     Employees.find(data).then((emp) => {
                         expect(emp.length).toBe(1);
                         expect(emp[0].userName).toBe(data.userName);
                         done();
                     }).catch((err) => done(err));

         });

 });

     it('should not save data when bad formated data is passed',(done)=> {

         reQuest(app)
             .post('/employee.json')
             .send({username:'hell',phoneNo:'90'})
             .expect(400)
             .end((err, res) => {
                 if (err) {
                     return done(err);
                 }

                 Employees.find().then((emp) => {
                     expect(emp.length).toBe(0);
                     done();
                 }).catch((e) => done(err))

             });
     });

 });

 describe('GET employees.json',(done)=>{

     it('should get all employees',(done)=>{

         reQuest(app)
             .get('/employee.json')
             .expect(200)
             .expect((res)=>{
             expect(res.body.length).toBe(2);
             })
             .end(done);

     });


 });



