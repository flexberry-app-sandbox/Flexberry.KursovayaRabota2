﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_Rabota_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Материал.
    /// </summary>
    // *** Start programmer edit section *** (Материал CustomAttributes)

    // *** End programmer edit section *** (Материал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МатериалE", new string[] {
            "Наименование as \'Название\'",
            "Вид as \'Вид учебного материала\'",
            "Дисциплина as \'Наименование Дисциплины\'",
            "Дисциплина.Наименование as \'Наименование Дисциплины\'"})]
    [View("МатериалL", new string[] {
            "Наименование as \'Название\'",
            "Вид as \'Вид учебного материала\'",
            "Дисциплина.Наименование as \'Наименование дисциплины\'"})]
    public class Материал : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private IIS.Kursovaya_Rabota_2.Вид fВид;
        
        private IIS.Kursovaya_Rabota_2.Дисциплина fДисциплина;
        
        // *** Start programmer edit section *** (Материал CustomMembers)

        // *** End programmer edit section *** (Материал CustomMembers)

        
        /// <summary>
        /// Вид.
        /// </summary>
        // *** Start programmer edit section *** (Материал.Вид CustomAttributes)

        // *** End programmer edit section *** (Материал.Вид CustomAttributes)
        public virtual IIS.Kursovaya_Rabota_2.Вид Вид
        {
            get
            {
                // *** Start programmer edit section *** (Материал.Вид Get start)

                // *** End programmer edit section *** (Материал.Вид Get start)
                IIS.Kursovaya_Rabota_2.Вид result = this.fВид;
                // *** Start programmer edit section *** (Материал.Вид Get end)

                // *** End programmer edit section *** (Материал.Вид Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материал.Вид Set start)

                // *** End programmer edit section *** (Материал.Вид Set start)
                this.fВид = value;
                // *** Start programmer edit section *** (Материал.Вид Set end)

                // *** End programmer edit section *** (Материал.Вид Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Материал.Наименование CustomAttributes)

        // *** End programmer edit section *** (Материал.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Материал.Наименование Get start)

                // *** End programmer edit section *** (Материал.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Материал.Наименование Get end)

                // *** End programmer edit section *** (Материал.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материал.Наименование Set start)

                // *** End programmer edit section *** (Материал.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Материал.Наименование Set end)

                // *** End programmer edit section *** (Материал.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Материал.
        /// </summary>
        // *** Start programmer edit section *** (Материал.Дисциплина CustomAttributes)

        // *** End programmer edit section *** (Материал.Дисциплина CustomAttributes)
        [PropertyStorage(new string[] {
                "Дисциплина"})]
        [NotNull()]
        public virtual IIS.Kursovaya_Rabota_2.Дисциплина Дисциплина
        {
            get
            {
                // *** Start programmer edit section *** (Материал.Дисциплина Get start)

                // *** End programmer edit section *** (Материал.Дисциплина Get start)
                IIS.Kursovaya_Rabota_2.Дисциплина result = this.fДисциплина;
                // *** Start programmer edit section *** (Материал.Дисциплина Get end)

                // *** End programmer edit section *** (Материал.Дисциплина Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материал.Дисциплина Set start)

                // *** End programmer edit section *** (Материал.Дисциплина Set start)
                this.fДисциплина = value;
                // *** Start programmer edit section *** (Материал.Дисциплина Set end)

                // *** End programmer edit section *** (Материал.Дисциплина Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МатериалE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалE", typeof(IIS.Kursovaya_Rabota_2.Материал));
                }
            }
            
            /// <summary>
            /// "МатериалL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалL", typeof(IIS.Kursovaya_Rabota_2.Материал));
                }
            }
        }
    }
}
